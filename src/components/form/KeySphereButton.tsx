"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

interface Props {
  path: string;
  icon: React.ReactNode;
  text: string;
  onClick?: any
}

export const KeySphereButton = ({ path, icon, text, onClick = ()=>{} }: Props) => {
  return (
    <Link
      onClick={onClick}
      href={path}
      className={`
        flex justify-start items-center bg-ks-dark 
        h-[36px] self-end rounded-full hover:shadow-md 
        hover:shadow-ks-grey w-[148px]
        `}
    >
      {icon}
      <span className="text-sm text-ks-beige p-3 font-semibold">{text}</span>
    </Link>
  );
};
