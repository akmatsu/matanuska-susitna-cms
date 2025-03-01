import { Context } from '@keystone-6/core/admin-ui/apollo';
import { getContext } from '@keystone-6/core/context';
import {
  AuthOptions,
  DefaultSession,
  DefaultUser,
  getServerSession,
} from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';
import AzureADProvider from 'next-auth/providers/azure-ad';

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
      console.log('RAN SIGN IN', user);
      const sudoContext = (await getKeystoneContext()).sudo();

      const u = await sudoContext.query.User.findOne({
        where: { authId: user.id },
      });

      if (!u) {
        await sudoContext.query.u.createOne({
          data: {
            authId: user.id,
            name: user.name,
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
      console.log('RAN SESSION', session, token);
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
    console.log('RAN GET');
    const { req, res } = context;
    const { headers } = req ?? {};
    if (!headers?.cookie || !res) {
      console.log('NO COOKIE');
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
      console.log('NO NEXT AUTH SESSION');
      return;
    }

    const { authId } = nextAuthSession.keystone;
    if (!authId) {
      console.log('NO AUTH ID');
      return;
    }

    const user = await context.sudo().db.User.findOne({
      where: { authId },
    });
    if (!user) {
      console.log('NO USER');
      return;
    }

    return { id: user.id };
  },

  // We don't need these as next-auth will handle them
  async start() {},
  async end() {},
};
