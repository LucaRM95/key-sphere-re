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
} from "react-icons/io5";

const menuItems = [
  { icon: <IoHomeOutline size={25} />, path: "/properties", name: "Properties" },
  {
    icon: <IoLayersOutline size={25} />,
    path: "/listings",
    name: "Listings",
  },
  {
    icon: <IoNotificationsOutline size={25} />,
    path: "/notifications",
    name: "Notifications",
  },
  {
    icon: <IoHeartOutline size={25} />,
    path: "/favorites",
    name: "Favorites",
  },
  { icon: <IoPersonOutline size={25} />, path: "/account", name: "Account" },
  { icon: <IoLogOutOutline size={25} />, path: "/logout", name: "Logout" },
];

export const Topbar = () => {
  return (
    <div
      className={`
      flex justify-between lg:justify-around items-center 
      w-full bg-ks-blue p-2 border-2 border-ks-beige text-ks-white relative z-20 
      lg:rounded-lg lg:mt-5 lg:ms-5
    `}
    >
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
        <div className="lg:hidden bg-ks-white w-[1px] h-[50px] rounded-full"></div>
        <div className="text-lg">
          <span className="font-bold lg:hidden">Key Sphere</span>
        </div>
      </Link>

      <DesktopMenu menuItems={menuItems} />
      <MobileMenu menuItems={menuItems} />
    </div>
  );
};
