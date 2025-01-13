"use client";

import { ICredentialsRegister, Toast } from "@/shared";
import { useState } from "react";
import { registerUser } from "../actions/register";
import { login } from "../actions/login";

const useAuthForm = (
  initialState: ICredentialsRegister
) => {
  const [value, setValue] = useState(initialState);

  const handleSubmitRegister = async (e: any) => {
    e.preventDefault();
    if(value.name.length === 0){
      return Toast.fire({
        icon: "error",
        title: "The username is required.",
      });
    }

    if(value.password.length === 0){
      return Toast.fire({
        icon: "error",
        title: "The password is required.",
      });
    }

    if ((value as ICredentialsRegister).confirmPassword !== value.password)
      return Toast.fire({
        icon: "error",
        title: "The passwords are not the same.",
      });
    
    const resp = await registerUser(value.name, value.email, value.password)

    Toast.fire({
      icon: resp.status === 200 ? "success" : "error",
      title: resp.message,
    });

    await login( value.email, value.password );
    window.location.replace('/');
  };

  return {
    value,
    setValue,
    handleSubmitRegister,
  };
};

export default useAuthForm;
