"use client";

import useAuthForm from "@/auth/hooks/useAuthForm";
import {
  KeySphereButton,
  KSPassInput,
  KSphereInput,
  KSphereSwitch,
} from "@/components";
import { ICredentialsRegister } from "@/shared";
import React from "react";
import { FaRightFromBracket } from "react-icons/fa6";

const initialState: ICredentialsRegister = {
  name: "",
  email: "",
  roles: ["user"],
  password: "",
  confirmPassword: "",
};

export const RegisterForm = () => {
  const { value, setValue, handleSubmitRegister } = useAuthForm(initialState);

  return (
    <form
      onSubmit={handleSubmitRegister}
      className="flex flex-col gap-5 w-full"
    >
      <KSphereInput
        type="text"
        title="User Name"
        placeholder="User Name"
        labelColor="text-ks-white"
        onChange={(e: any) => setValue({ ...value, name: e.target.value })}
        required
      />
      <KSphereInput
        type="email"
        title="Email"
        placeholder="Email Address"
        labelColor="text-ks-white"
        onChange={(e: any) => setValue({ ...value, email: e.target.value })}
        required
      />
      <KSPassInput
        title="Password"
        placeholder="Password"
        labelColor="text-ks-white"
        onChange={(e: any) => setValue({ ...value, password: e.target.value })}
        required
      />
      <KSPassInput
        title="Confirm Password"
        placeholder="Password"
        labelColor="text-ks-white"
        onChange={(e: any) =>
          setValue({ ...value, confirmPassword: e.target.value })
        }
        required
      />
      <KeySphereButton
        type="submit"
        className="w-full h-[50px] text-center mt-5"
        icon={
          <FaRightFromBracket
            size={30}
            className="text-ks-dark bg-ks-beige h-full rounded-tl-full rounded-bl-full p-2"
          />
        }
        text="Register"
        isButton
        selfCenter
        textCenter
      />
    </form>
  );
};
