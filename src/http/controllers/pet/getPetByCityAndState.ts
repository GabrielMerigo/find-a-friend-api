import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const getPetByCityAndState = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const getByIdSchema = z.object({
    state: z.string(),
    city: z.string(),
  });

  const { city, state } = getByIdSchema.parse(request.query);

  const data = await prisma.organization.findMany({
    where: {
      state: {
        contains: state,
      },
      city: {
        contains: city,
      },
    },
    select: {
      Pet: true,
    },
  });

  return reply.status(200).send({
    pets: data[0].Pet,
  });
};
