import prisma from '../../../lib/prisma'

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// get all posts
export default async function handle(req, res) {

  const posts = await prisma.post.findMany({
    include: {
        author: {
          select: { email: true,
                    name: true },
        },
      },

  });

  
  res.json(posts);

}