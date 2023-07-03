import { prisma } from "@/lib/prisma";

export const verifyIfEmailExists = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};
