"use server";

import { signIn } from "@/auth.config";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    return "success";
  } catch (error) {
    return "error";
  }
}

export const login = async (email: any, password: any) => {
  try {
    await signIn("credentials", { email, password });

    return { status: 200 };
  } catch (error) {
    return { status: 400, message: `${error}` };
  }
};
