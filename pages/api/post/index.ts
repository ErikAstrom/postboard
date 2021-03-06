import { getSession } from "next-auth/react"
import prisma from '../../../lib/prisma'

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req:NextApiRequest, res:NextApiResponse) {

  const { title, content } = req.body;


  const session = await getSession({ req });
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}