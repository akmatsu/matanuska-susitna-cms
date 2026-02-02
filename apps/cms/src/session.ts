import { Context } from '@keystone-6/core/admin-ui/apollo';
import { getContext } from '@keystone-6/core/context';
import { AuthOptions, DefaultSession, getServerSession } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';
import AzureADProvider from 'next-auth/providers/azure-ad';
import { logger } from './configs/logger';

let _keystoneContext: Context = (globalThis as any)._keystoneContext;

async function getKeystoneContext() {
  if (_keystoneContext) return _keystoneContext;

  _keystoneContext = getContext(
    (await import('../keystone')).default,
    await import('@prisma/client'),
  );

  if (process.env.NODE_ENV !== 'production') {
    (globalThis as any)._keystoneContext = _keystoneContext;
  }
  return _keystoneContext;
}

export const nextAuthOptions: AuthOptions = {
  secret: process.env.SESSION_SECRET as string,
  callbacks: {
    async signIn({ user }) {
      const sudoContext = (await getKeystoneContext()).sudo();

      let u = await sudoContext.db.User.findOne({
        where: { authId: user.id },
      });

      if (!u) {
        const tu = await sudoContext.db.User.findOne({
          where: { email: user.email?.toLowerCase() },
        });

        if (tu) {
          u = await sudoContext.db.User.updateOne({
            where: { id: tu.id },
            data: {
              authId: user.id,
            },
          });
        }
      }

      if (!u) {
        await sudoContext.db.User.createOne({
          data: {
            authId: user.id,
            name: user.name,
            email: user.email?.toLowerCase(),
          },
        });
      }

      return true;
    },

    async session({
      session,
      token,
    }: {
      session: DefaultSession;
      token: DefaultJWT;
    }) {
      return {
        ...session,
        keystone: {
          authId: token.sub,
        },
      };
    },
  },

  providers: [
    AzureADProvider({
      clientId: process.env.AD_CLIENT_ID as string,
      clientSecret: process.env.AD_CLIENT_SECRET as string,
      tenantId: process.env.AD_TENANT_ID,
      authorization: {
        params: {
          redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/azure-ad`,
        },
      },
    }),
  ],
};

export type Session = {
  id: string;
};

export const nextAuthSessionStrategy = {
  async get({ context }: { context: Context }) {
    const { req, res } = context;
    const { headers } = req ?? {};
    if (!headers?.cookie || !res) {
      return;
    }

    // next-auth requires a different cookie structure

    const cookies: Record<string, string> = {};
    for (const part of headers.cookie.split(';')) {
      const [key, value] = part.trim().split('=');
      cookies[key] = decodeURIComponent(value);
    }

    const nextAuthSession = (await getServerSession(
      { headers, cookies } as any,
      res,
      nextAuthOptions,
    )) as (Session & { keystone: { authId: string } }) | null;
    if (!nextAuthSession) {
      logger.warn(
        nextAuthSession,
        'Warning in nexsAuthSessionStrategy "NO NEXT AUTH SESSION":',
      );
      return;
    }

    const { authId } = nextAuthSession.keystone;
    if (!authId) {
      logger.warn(
        nextAuthSession,
        'Warning in nextAuthSessionStrategy "NO AUTH ID":',
      );
      return;
    }

    const user = await context.sudo().db.User.findOne({
      where: { authId },
    });
    if (!user) {
      logger.warn(
        nextAuthSession,
        'Warning in nextAuthSessionStrategy "NO USER":',
      );
      return;
    }

    return { id: user.id };
  },

  // We don't need these as next-auth will handle them
  async start() {},
  async end() {},
};
