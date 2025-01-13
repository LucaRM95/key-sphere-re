"use server";

import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: bcryptjs.hashSync(password),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return {
      status: 200,
      user: user,
      message: "You've been registered successfully",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Uups, we couldn't register the user, please try again later",
    };
  }
};
