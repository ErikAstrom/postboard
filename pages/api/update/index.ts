import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.body;

  const session = await getSession({ req });

  const result = await prisma.user.update({
    where: {
      email: session.user.email,
    },
    data: {
      name: name,
    },
  });

  res.json(result);
}
