"use client";

import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobile/MobileMenu";
import { DesktopMenu } from "./desktop/DesktopMenu";
import {
  IoHeartOutline,
  IoHomeOutline,
  IoLayersOutline,
  IoLogOutOutline,
  IoNotificationsOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";

const menuItems = [
  { icon: <IoHomeOutline size={25} />, path: "/properties", name: "Dashboard" },
  {
    icon: <IoLayersOutline size={25} />,
    path: "/properties",
    name: "Listings",
  },
  {
    icon: <IoNotificationsOutline size={25} />,
    path: "/properties",
    name: "Notifications",
  },
  {
    icon: <IoHeartOutline size={25} />,
    path: "/properties",
    name: "Favorites",
  },
  { icon: <IoPersonOutline size={25} />, path: "/properties", name: "Account" },
  { icon: <IoLogOutOutline size={25} />, path: "/properties", name: "Logout" },
];

export const Topbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-[60px] bg-ks-dark p-2 text-ks-white relative">
      <Link
        href="/properties"
        className="flex items-center gap-2 cursor-pointer"
      >
        <Image
          src="/images/key-sphere-logo3.png"
          alt="Key Sphere Logo"
          width={48}
          height={48}
        />
        <div className="bg-ks-white w-[1px] h-[50px] rounded-full"></div>
        <div className="text-lg">
          <span className="font-bold">Key Sphere</span>
        </div>
      </Link>

      <DesktopMenu menuItems={menuItems} />
      <MobileMenu menuItems={menuItems} />
    </div>
  );
};
