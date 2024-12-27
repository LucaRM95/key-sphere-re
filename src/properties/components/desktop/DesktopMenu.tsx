"use client";

import React from "react";
import { KeySphereButton, ProfileMenu } from "@/components";
import { MenuItem } from "@/properties/interfaces/menuItem.interface";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";

interface Props {
  menuItems: Array<MenuItem>;
  session?: Session | null;
}

export const DesktopMenu = ({ menuItems, session }: Props) => {
  const pathName = usePathname();

  return (
    <nav className="hidden xl:flex items-center gap-6">
      {menuItems.map(({ path, name, icon, children }) => (
        <React.Fragment key={path}>
          {name !== "Account" ? (
            <Link
              href={path}
              className={`
              flex gap-2 text-ks-dark items-center border border-b-2 border-transparent hover:text-ks-grey hover:border 
              hover:border-b-2 hover:border-b-ks-dark hover:transition-all hover:duration-200 p-1
              ${path === "/account" && "border-none"}
              ${
                pathName === "/" &&
                "text-ks-white hover:text-ks-white hover:border hover:border-b-2 hover:border-b-ks-white"
              }
              ${
                pathName === path && pathName === "/"
                  ? "border border-b-2 border-b-ks-white"
                  : pathName === path && "border border-b-2 border-b-ks-dark"
              }
            `}
            >
              {icon ? icon : <></>}
              <span className="text-[10px]">{name.toUpperCase()}</span>
            </Link>
          ) : (
            <>
              {session ? (
                <ProfileMenu
                  image={
                    session?.user?.image ??
                    "https://pbs.twimg.com/profile_images/849742844285812740/SN-tYeHq_400x400.jpg"
                  }
                  menuList={children!}
                />
              ) : (
                <KeySphereButton
                  isButton
                  onClick={() => (session ? signOut() : signIn())}
                  icon={
                    session ? (
                      <IoLogOutOutline
                        className="text-ks-dark bg-ks-beige h-full rounded-tl-full rounded-bl-full p-2"
                        size={35}
                      />
                    ) : (
                      <IoLogInOutline
                        className="text-ks-dark bg-ks-beige h-full rounded-tl-full rounded-bl-full p-2"
                        size={35}
                      />
                    )
                  }
                  text={session ? "Logout" : "Login"}
                  path="#"
                />
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
