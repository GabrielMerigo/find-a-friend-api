import { Prisma, User } from "@prisma/client";

export interface RegisterUseCase {
  create(data: Prisma.UserUncheckedCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
