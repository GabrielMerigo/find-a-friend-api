import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const getById = async (request: FastifyRequest, reply: FastifyReply) => {
  const getByIdSchema = z.object({
    id: z.string(),
  });

  const { id } = getByIdSchema.parse(request.params);

  const pet = await prisma.pet.findUnique({
    where: {
      id,
    },
  });

  return reply.status(200).send({
    pet,
  });
};
