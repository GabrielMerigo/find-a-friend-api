import { UserAlreadyExistsError } from "@/errors/userAlreadyExists";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { compare } from "bcryptjs";
import { beforeEach, describe, expect, it } from "vitest";
import { RegisterUseCase } from ".";

let usersRepository: InMemoryUsersRepository;
let sut: RegisterUseCase;

describe("Register Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new RegisterUseCase(usersRepository);
  });

  it("should be able to register", async () => {
    const { user } = await sut.execute({
      email: "user@example.com",
      name: "user",
      password: "123",
      role: "CLIENT",
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should hash user password upon registrations", async () => {
    const { user } = await sut.execute({
      email: "user@example.com",
      name: "user",
      password: "123",
      role: "CLIENT",
    });

    const isPasswordCorrectlyHashed = await compare("123", user.password_hash);

    expect(isPasswordCorrectlyHashed).toBe(true);
  });

  it("should not be able to register with same email twice", async () => {
    await sut.execute({
      email: "user@example.com",
      name: "user",
      password: "123",
      role: "CLIENT",
    });

    await expect(() =>
      sut.execute({
        email: "user@example.com",
        name: "user",
        password: "123",
        role: "CLIENT",
      })
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
