"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { notificationService } from "@/shared/services/notificationService";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";

export const getUserSessionServer = async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
};

export const sigInEmailPass = async (email: string, password: string) => {
  if (!email || !password) return null;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return notificationService.error(
      "There's not user founded, please try again."
    );
  }

  if (!bcrypt.compareSync(password, user.password ?? ""))
    return notificationService.error(
      "User or password are incorrect, please try again."
    );

  return user;
};

const createUser = async (user: User) => {
  await prisma.user.create({
    data: {
      ...user,
      password: bcrypt.hashSync(user.password ?? ""),
    },
  });
};
