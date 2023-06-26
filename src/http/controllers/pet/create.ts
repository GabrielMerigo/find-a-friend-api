import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  const petBodySchema = z.object({
    age: z.enum(["CUB", "MIDDLE_AGE", "OLD"]),
    name: z.string(),
    color: z.string(),
    animal_size: z.enum(["SMALL", "MEDIUM", "BIG", "EXTRA_BIG"]),
    city: z.string(),
    energy_level: z.enum(["LOW", "MEDIUM", "HIGH"]),
    independence_level: z.enum(["LOW", "MEDIUM", "HIGH"]),
    type: z.enum(["CAT", "DOG"]),
    organization_id: z.string(),
  });

  const petBodyRequest = petBodySchema.parse(request.body);

  await prisma.pet.create({
    data: petBodyRequest as Prisma.PetUncheckedCreateInput,
  });

  return reply.status(201).send();
};
