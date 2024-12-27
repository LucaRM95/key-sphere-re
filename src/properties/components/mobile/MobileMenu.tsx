"use client";

import { HorizontalSeparator, KeySphereButton } from "@/components";
import { MenuItem } from "@/properties/interfaces/menuItem.interface";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IoClose,
  IoLogOutOutline,
  IoMenu,
  IoPersonCircleOutline,
} from "react-icons/io5";

interface Props {
  menuItems: Array<MenuItem>;
  session?: Session | null;
}

export const MobileMenu = ({ menuItems, session }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <button className="flex xl:hidden" onClick={toggleMenu}>
        {menuOpen ? (
          <IoClose className="text-ks-dark" size={40} />
        ) : (
          <IoMenu
            className={`${pathName === "/" ? "text-ks-white" : "text-ks-dark"}`}
            size={40}
          />
        )}
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`w-full bg-ks-white text-ks-dark h-full md:w-[40%] p-8 flex flex-col gap-5 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-5">
              {/* <Image
                src="/images/key-sphere-logo3.png"
                alt="Key Sphere Logo"
                width={40}
                height={40}
              /> */}
              <span className="text-xl font-semibold">Key.Sphere.</span>
            </div>
            <button className="self-end text-ks-dark" onClick={toggleMenu}>
              <IoClose size={40} />
            </button>
          </div>
          {session && (
            <>
              <HorizontalSeparator />
              <div className="flex items-center space-x-1 overflow-hidden w-full h-[100px] pl-3 pr-3 gap-4">
                <Image
                  width={50}
                  height={0}
                  className=" inline-block size-14 rounded-full ring-2 ring-ks-white"
                  src={
                    session?.user?.image ??
                    "https://pbs.twimg.com/profile_images/849742844285812740/SN-tYeHq_400x400.jpg"
                  }
                  alt="Profile image"
                />
                <div className="flex flex-col font-semibold text-ks-dark">
                  <span className="text-ks-dark">{session?.user?.name}</span>
                  <Link
                    className="font-thin text-[12px] hover:text-gray-300"
                    href="#"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </>
          )}
          <HorizontalSeparator />
          <div className="flex flex-col gap-8 h-full">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`
                flex items-center w-[200px] text-ks-dark gap-10 hover:bg-ks-beige hover:transition-all hover:duration-200 p-2 rounded text-lg
                ${pathName === item.path ? "bg-ks-beige" : ""}
                `}
                onClick={toggleMenu}
              >
                {item.icon ? item.icon : <></>}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <HorizontalSeparator />
          <div>
            <KeySphereButton
              onClick={() => (session ? signOut() : signIn())}
              icon={
                session ? (
                  <IoLogOutOutline
                    className="text-ks-dark bg-ks-beige h-full rounded-tl-full rounded-bl-full p-2"
                    size={35}
                  />
                ) : (
                  <IoPersonCircleOutline
                    className="text-ks-dark bg-ks-beige h-full rounded-tl-full rounded-bl-full p-2"
                    size={35}
                  />
                )
              }
              text={session ? "Logout" : "Login"}
              path="#"
            />
          </div>
        </div>
      </div>
    </>
  );
};
