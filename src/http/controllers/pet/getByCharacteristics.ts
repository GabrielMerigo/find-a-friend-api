import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const getByCharacteristics = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const getByCharacteristicsSchema = z.object({
    animal_size: z.enum(["SMALL", "MEDIUM", "BIG", "EXTRA_BIG"]).nullish(),
    energy_level: z.enum(["LOW", "MEDIUM", "HIGH"]).nullish(),
    age: z.enum(["CUB", "MIDDLE_AGE", "OLD"]).nullish(),
    independence_level: z.enum(["LOW", "MEDIUM", "HIGH"]).nullish(),
    type: z.enum(["DOG", "CAT"]).nullish(),
    color: z.string().nullish(),
    name: z.string().nullish(),
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
      type,
      age,
      color: {
        contains: color,
      },
      name: {
        contains: name,
      },
      animal_size,
      energy_level,
      independence_level,
    },
  });

  return reply.status(200).send({
    pets,
  });
};
