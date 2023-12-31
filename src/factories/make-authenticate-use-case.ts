import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repositories";
import { AuthenticateUseCase } from "@/use-cases/authenticate";

export const makeAuthenticateUseCase = () => {
  const usersRepository = new PrismaUsersRepository();
  const authenticateUseCase = new AuthenticateUseCase(usersRepository);

  return authenticateUseCase;
};
