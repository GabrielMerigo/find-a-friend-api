import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const getPetByCityId = (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const cityIdSchema = z.object({});
};
