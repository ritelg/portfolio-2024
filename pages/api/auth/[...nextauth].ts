import {env} from '@/libs/env';
import {prisma} from '@/libs/prisma';
import {PrismaAdapter} from '@auth/prisma-adapter';
import NextAuth, {AuthOptions} from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [

    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session({session, user}) {
      session.user.id = user.id;
      session.user.role = user.role;

      return session;
    },
  },
};

export default NextAuth(authOptions);
