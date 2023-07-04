import { UserAlreadyExistsError } from "@/errors/user-already-exists";
import { makeRegisterUseCase } from "@/factories/make-register-use-cases";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const register = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(["ADMIN", "CLIENT"]),
  });

  const { name, email, password, role } = registerBodySchema.parse(
    request.body
  );

  try {
    const registerUseCase = makeRegisterUseCase();

    await registerUseCase.execute({
      name,
      email,
      password,
      role,
    });
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: error.message });
    }
  }

  return reply.status(201).send();
};
