"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { FaRightFromBracket } from "react-icons/fa6";

import {
  KeySphereButton,
  KSPassInput,
  KSphereInput,
  KSphereSwitch,
} from "@/components";
import { authenticate } from "@/auth/actions/login";
import { Toast } from "@/shared";

export const LoginForm = () => {
  const [state, dispatch] = useActionState(authenticate, undefined);

  React.useEffect(() => {
    if (state === "success") {
      window.location.replace("/");
    } 
    if(state === "error") {
      Toast.fire({
        icon: "error",
        title: "Email or passsword are invalid, please try again."
      })
    }
  }, [state]);

  return (
    <form
      action={dispatch}
      className="flex flex-col gap-5 w-full"
    >
      <KSphereInput
        name="email"
        type="email"
        title="Email"
        placeholder="Email Address"
        labelColor="text-ks-white"
      />
      <KSPassInput
        name="password"
        title="Password"
        placeholder="Password"
        labelColor="text-ks-white"
      />
      <div className="flex text-sm justify-between">
        <KSphereSwitch />
        <Link className="!underline" href="#">
          Forgot password?
        </Link>
      </div>
      <KeySphereButton
        type="submit"
        className="w-full h-[50px] text-center"
        icon={
          <FaRightFromBracket
            size={30}
            className="text-ks-dark bg-ks-beige h-full rounded-tl-full rounded-bl-full p-2"
          />
        }
        text="Login"
        isButton
        selfCenter
        textCenter
      />
    </form>
  );
};
