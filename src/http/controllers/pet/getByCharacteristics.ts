import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const getByCharacteristics = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const getByCharacteristicsSchema = z.object({
    animal_size: z.string().nullable(),
    energy_level: z.enum(["LOW", "MEDIUM", "HIGH"]).nullable(),
    age: z.enum(["CUB", "MIDDLE_AGE", "OLD"]).nullable(),
    independence_level: z.enum(["LOW", "MEDIUM", "HIGH"]).nullable(),
    type: z.enum(["DOG", "CAT"]).nullable(),
    color: z.string().nullable(),
    name: z.string().nullable(),
  });

  const {
    type,
    animal_size,
    age,
    color,
    name,
    energy_level,
    independence_level,
  } = getByCharacteristicsSchema.parse(request.query);

  const pets = await prisma.pet.findMany({
    where: {
      animal_size,
      type,
      age,
      color: {
        contains: color,
      },
      name: {
        contains: name,
      },
      energy_level,
      independence_level,
    },
  });

  return reply.status(200).send({
    pets,
  });
};
