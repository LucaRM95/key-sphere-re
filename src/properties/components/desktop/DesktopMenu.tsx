"use client";

import { KeySphereButton } from "@/components";
import { MenuItem } from "@/properties/interfaces/menuItem.interface";
import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";

interface Props {
  menuItems: Array<MenuItem>;
  session?: Session | null;
}

export const DesktopMenu = ({ menuItems, session }: Props) => {
  const pathName = usePathname();

  return (
    <nav className="hidden xl:flex items-center gap-6">
      {menuItems.map(({ path, name, icon }) => (
        <Link
          key={name}
          href={path}
          className={`
            flex gap-2 text-ks-dark items-center border-b-2 border-transparent hover:text-ks-grey hover:border 
            hover:border-b-2 hover:border-b-ks-dark hover:transition-all hover:duration-200 p-1
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
      ))}
      {pathName === "/" ? (
        <KeySphereButton
          onClick={() => session ? signOut() : signIn()}
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
      ) : (
        <button
          onClick={() => session ? signOut() : signIn()}
          className="flex items-center space-x-4 p-1 text-ks-dark group border-b-2 border-transparent hover:border 
            hover:border-b-2 hover:border-b-ks-dark hover:transition-all hover:duration-200"
        >
          {session ? (
            <IoLogOutOutline size={25} />
          ) : (
            <IoLogInOutline size={25} />
          )}
          <span className="text-[10px]">{session ? "LOGOUT" : "LOGIN"}</span>
        </button>
      )}
    </nav>
  );
};
