"use client";

import { MenuItem } from "@/properties/interfaces/menuItem.interface";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IoClose,
  IoMenu,
} from "react-icons/io5";

interface Props {
  menuItems: Array<MenuItem>;
}

export const MobileMenu = ({ menuItems }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <button className="flex xl:hidden" onClick={toggleMenu}>
        {menuOpen ? (
          <IoClose className="text-ks-white" size={40} />
        ) : (
          <IoMenu className="text-ks-white" size={40} />
        )}
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`w-full bg-ks-blue h-full md:w-[40%] p-8 flex flex-col gap-5 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <Image
              src="/images/key-sphere-logo.png"
              alt="Key Sphere Logo"
              width={180}
              height={60}
            />
            <button className="self-end text-white" onClick={toggleMenu}>
              <IoClose size={40} />
            </button>
          </div>
          <div className="w-full h-[1px] bg-ks-white opacity-10 rounded mt-3"></div>
          <div className="flex items-center space-x-1 overflow-hidden w-full h-[100px] p-3 gap-4">
            <Image
              width={50}
              height={0}
              className=" inline-block size-14 rounded-full ring-2 ring-ks-white"
              src="https://pbs.twimg.com/profile_images/849742844285812740/SN-tYeHq_400x400.jpg"
              alt=""
            />
            <div className="flex flex-col font-semibold text-ks-white">
              <span className="text-ks-beige">Caroline Forbes</span>
              <Link
                className="font-thin text-[12px] hover:text-gray-300"
                href="#"
              >
                View Profile
              </Link>
            </div>
          </div>
          <div className="w-full h-[1px] bg-ks-white opacity-10 rounded mb-3"></div>
          <div className="flex flex-col gap-8 h-full">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`
                  flex items-center w-[200px] text-ks-white gap-10 hover:bg-ks-beige hover:transition-all hover:duration-200 p-2 rounded-xl text-lg
                  ${ pathName === item.path ? "bg-ks-beige" : ""}
                `}
                onClick={toggleMenu}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
