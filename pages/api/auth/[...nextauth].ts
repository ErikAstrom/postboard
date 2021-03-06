import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import prisma from '../../../lib/prisma'

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();


import EmailProvider from "next-auth/providers/email"
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter"

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

const options = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        })
    ], callbacks: {
        async jwt({ token }) {
          token.userRole = "admin"
          return token
        },
      },
}
export default authHandler;