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

      const u = await sudoContext.query.User.findOne({
        where: { authId: user.id },
      });

      if (!u) {
        await sudoContext.query.User.createOne({
          data: {
            authId: user.id,
            name: user.name,
            email: user.email,
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

    const nextAuthSession = await getServerSession(
      { headers, cookies } as any,
      res,
      nextAuthOptions,
    );
    if (!nextAuthSession) {
      logger.warn(
        'Warning in nexsAuthSessionStrategy "NO NEXT AUTH SESSION":',
        nextAuthSession,
      );
      return;
    }

    const { authId } = nextAuthSession.keystone;
    if (!authId) {
      logger.warn(
        'Warning in nextAuthSessionStrategy "NO AUTH ID":',
        nextAuthSession,
      );
      return;
    }

    const user = await context.sudo().db.User.findOne({
      where: { authId },
    });
    if (!user) {
      logger.warn(
        'Warning in nextAuthSessionStrategy "NO USER":',
        nextAuthSession,
      );
      return;
    }

    return { id: user.id };
  },

  // We don't need these as next-auth will handle them
  async start() {},
  async end() {},
};
