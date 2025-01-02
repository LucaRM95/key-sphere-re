"use client";

import { IPersonal } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

interface Props {
  employee: IPersonal;
  className?: string;
}

export const PersonalCard = ({ employee, className = "" }: Props) => {
  return (
    <div
      className={`${className} w-[250px] h-[330px] group relative bg-ks-beige rounded-t-xl`}
    >
      <Image
        className="h-[330px] w-[250px]"
        src={employee.image}
        alt=""
        height={1200}
        width={1000}
      />
      <div className="flex flex-col items-center bg-ks-dark text-ks-white gap-2 p-3 h-[76px] group-hover:hidden animate-slide-up rounded-b-xl">
        <div className="flex flex-col items-center gap-2">
          <h4 className="font-bold text-lg">{employee.name}</h4>
          <span className="text-xs">{employee.position}</span>
        </div>
      </div>
      <div className="hidden items-center justify-evenly bg-ks-grey text-ks-white gap-2 p-3 h-[76px] group-hover:flex animate-slide-down rounded-b-xl">
        <Link
          className="hover:bg-ks-beige hover:text-ks-dark p-2 rounded-full"
          href="https://instagram.com"
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          className="hover:bg-ks-beige hover:text-ks-dark p-2 rounded-full"
          href="https://facebook.com"
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link
          className="hover:bg-ks-beige hover:text-ks-dark p-2 rounded-full"
          href="https://x.com"
          target="_blank"
        >
          <FaXTwitter />
        </Link>
        <Link
          className="hover:bg-ks-beige hover:text-ks-dark p-2 rounded-full"
          href="https://linkedin.com"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
};
