import { Prisma, User } from "@prisma/client";
import { randomUUID } from "crypto";
import { UsersRepository } from "../users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = [];

  async create(data: Prisma.UserUncheckedCreateInput) {
    const user = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      role: data.role,
    };

    this.items.push(user);

    return user;
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email);

    if (!user) return null;

    return user;
  }
}
