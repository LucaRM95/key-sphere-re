"use client";

import { MenuItem as IMenuItem } from "@/properties/interfaces/menuItem.interface";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightFromBracket, FaRightFromBracket } from "react-icons/fa6";

interface Props {
  image: string;
  menuList: Array<IMenuItem>;
  noLogin?: boolean;
}

export function ProfileMenu({ image, menuList, noLogin = false }: Props) {
  const menuListAux = noLogin ? [] : menuList;

  const handleClick = () => {
    if (noLogin) signIn();
    else signOut();
  };

  return (
    <Menu>
      <MenuHandler>
        <Image
          width={50}
          height={0}
          className=" inline-block size-10 rounded-full ring-2 ring-ks-white cursor-pointer"
          src={image ?? "/images/no-user-icon.jpg"}
          alt="Profile image"
        />
      </MenuHandler>
      <MenuList {...({ className: "bg-ks-white" } as any)}>
        {menuListAux.length > 0 && menuListAux.map((item) => (
          <MenuItem key={item.path} {...({} as any)}>
            <Link className="flex items-center gap-2" href={`${item.path}`}>
              {item.icon}
              <Typography
                {...({ variant: "small", className: "font-medium" } as any)}
              >
                {item.name}
              </Typography>
            </Link>
          </MenuItem>
        ))}
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem
          {...({
            className: "flex items-center gap-2 ",
            onClick: handleClick,
          } as any)}
        >
          {noLogin ? <FaRightFromBracket /> : <FaArrowRightFromBracket />}
          <Typography
            {...({ variant: "small", className: "font-medium" } as any)}
          >
            {noLogin ? "Login" : "Logout"}
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
