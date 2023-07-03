import { EmailAlreadyExistsError } from "@/errors/emailAlreadyExists";
import { prisma } from "@/lib/prisma";
import { verifyIfEmailExists } from "@/utils/verifyIfEmailExists";
import { hash } from "bcryptjs";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const register = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    role: z.enum(["ADMIN", "CLIENT"]),
    password: z.string().min(6),
  });

  const { name, email, role, password } = registerBodySchema.parse(
    request.body
  );

  const emailExists = await verifyIfEmailExists(email);
  if (emailExists) return new EmailAlreadyExistsError();

  await prisma.user.create({
    data: {
      name,
      email,
      password_hash: await hash(password, 6),
      role,
    },
  });

  reply.status(201).send();
};
