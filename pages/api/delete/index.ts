
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default async function handle(req:NextApiRequest, res:NextApiResponse) {

    
    const id = req.body;
    if (req.method === 'DELETE') {
      const post = await prisma.post.delete({
        where: { id: String(id) },
      });
      res.json(post);
    } else {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
    }
  }