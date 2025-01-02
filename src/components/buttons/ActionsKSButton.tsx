"use client";

import Link from "next/link";
import React from "react";

interface Props {
  icon: React.ReactNode;
  onClick?: any;
  isLink?: boolean;
  href?: string;
}

export const ActionsKSButton = ({
  icon,
  onClick = ()=>{},
  isLink = false,
  href = "#",
}: Props) => {
  return (
    <>
      {isLink ? (
        <Link
          className="flex items-center justify-center bg-ks-dark rounded-full shadow hover:bg-ks-grey w-[31px] h-[31px]"
          href={href}
        >
          {icon}
        </Link>
      ) : (
        <button onClick={onClick} className="flex items-center justify-center bg-ks-dark rounded-full shadow hover:bg-ks-grey w-[31px] h-[31px]">
          {icon}
        </button>
      )}
    </>
  );
};
