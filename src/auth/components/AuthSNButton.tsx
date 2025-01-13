"use client";

import { signIn } from "next-auth/react";

interface Props {
  id: string;
  icon: React.ReactNode;
}

export const AuthSNButton = ({ icon, id }: Props) => {
  const handleLoginSN = () => {
    if (id === "google") signIn("google", { redirect: true, redirectTo: "/" });

    if (id === "apple") console.log("Logging with Apple");

    if (id === "facebook") console.log("Logging with Facebook");
  };

  return (
    <button
      id={id}
      onClick={handleLoginSN}
      className="flex justify-center items-center bg-ks-grey p-5 w-full h-[55px] rounded-md"
    >
      {icon}
    </button>
  );
};
