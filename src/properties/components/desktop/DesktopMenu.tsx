import { MenuItem } from "@/properties/interfaces/menuItem.interface";
import Link from "next/link";

interface Props {
  menuItems: Array<MenuItem>;
}

export const DesktopMenu = ({ menuItems }: Props) => {
  return (
    <nav className="hidden lg:flex items-center gap-6">
      {menuItems.map(({ path, name, icon }) => (
        <Link key={name} href={path} className="flex gap-2 items-center hover:text-gray-300">
          { icon }
          <span className="text-[10px]">{ name.toUpperCase() }</span>
        </Link>
      ))}
    </nav>
  );
};
