"use client";

import { MenuItem as IMenuItem } from "@/properties/interfaces/menuItem.interface";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";

interface Props {
  image: string;
  menuList: Array<IMenuItem>;
}

export function ProfileMenu({ image, menuList }: Props) {
  return (
    <Menu>
      <MenuHandler>
        <Image
          width={50}
          height={0}
          className=" inline-block size-10 rounded-full ring-2 ring-ks-white cursor-pointer"
          src={
            image ??
            "https://pbs.twimg.com/profile_images/849742844285812740/SN-tYeHq_400x400.jpg"
          }
          alt="Profile image"
        />
      </MenuHandler>
      <MenuList {...({ className: "bg-ks-white"} as any)}>
        {menuList.map((item) => (
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
        <MenuItem {...({ className: "flex items-center gap-2 ", onClick: () => signOut() } as any)}>
          <FaArrowRightFromBracket />
          <Typography
            {...({ variant: "small", className: "font-medium" } as any)}
          >
            Logout
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
