import { UserAlreadyExistsError } from "@/errors/user-already-exists";
import { UsersRepository } from "@/repositories/users-repository";
import { Role, User } from "@prisma/client";
import { hash } from "bcryptjs";

interface RegisterUserUseCaseParams {
  name: string;
  email: string;
  password: string;
  role: Role;
}

interface RegisterUserUseCaseResponse {
  user: User;
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
    name,
    role,
  }: RegisterUserUseCaseParams): Promise<RegisterUserUseCaseResponse> {
    const password_hash = await hash(password, 6);
    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) throw new UserAlreadyExistsError();

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
      role,
    });

    return { user };
  }
}
