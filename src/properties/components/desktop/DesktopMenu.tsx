"use client"

import { MenuItem } from "@/properties/interfaces/menuItem.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  menuItems: Array<MenuItem>;
}

export const DesktopMenu = ({ menuItems }: Props) => {
  const pathName = usePathname();

  return (
    <nav className="hidden xl:flex items-center gap-6">
      {menuItems.map(({ path, name, icon }) => (
        <Link
          key={name}
          href={path}
          className={`
            flex gap-2 items-center border-b-2 border-transparent hover:text-gray-300 hover:border-dashed 
            hover:border-b-2 hover:border-b-ks-beige hover:transition-all hover:duration-200 p-1
            ${ pathName === path ? "border-dashed border-b-2 border-b-ks-beige" : ""}
          `}
        >
          { icon }
          <span className="text-[10px]">{ name.toUpperCase() }</span>
        </Link>
      ))}
    </nav>
  );
};
