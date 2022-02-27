import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: { email: true, name: true },
      },
    },
  });

  res.json(posts);
}
