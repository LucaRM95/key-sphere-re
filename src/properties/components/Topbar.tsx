"use client";

import Link from "next/link";
import { MobileMenu } from "./mobile/MobileMenu";
import { DesktopMenu } from "./desktop/DesktopMenu";

import { usePathname } from "next/navigation";
import { Session } from "next-auth";

import { menuMobileItems, menuDesktopItems } from "@/properties/index";

interface Props {
  withoutBg?: boolean;
  session?: Session | null;
}

export const Topbar = ({ withoutBg = false, session }: Props) => {
  const pathname = usePathname();

  return (
    <div
      className={`
      flex justify-between ${
        pathname === "/" ? "p-5" : "lg:justify-around lg:ms-5 lg:mt-5"
      } items-center 
      w-full ${withoutBg ? "bg-transparent border-none" : "bg-ks-white"}  
      p-2 border-2 text-ks-white relative z-20 lg:rounded-lg
    `}
    >
      <Link
        href="/properties"
        className="flex items-center justify-center gap-2 cursor-pointer h-[60px] w-[150px]"
      >
        {/* <Image
          src="/images/key-sphere-logo3.png"
          alt="Key Sphere Logo"
          width={40}
          height={40}
        /> */}
        {/* <div className="lg:hidden bg-ks-white w-[1px] h-[50px] rounded-full"></div> */}
        <div
          className={`text-lg ${
            pathname === "/" ? "text-ks-white" : "text-ks-dark"
          } w-full`}
        >
          <span className="font-bold text-3xl">KSphere.</span>
        </div>
      </Link>

      <DesktopMenu menuItems={menuDesktopItems} session={session} />
      <MobileMenu menuItems={menuMobileItems} session={session} />
    </div>
  );
};
