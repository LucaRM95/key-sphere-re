import {
  FaHouse,
  FaDollarSign,
  FaTags,
  FaHeart,
  FaCircleInfo,
  FaLocationDot,
  FaUserPlus,
  FaGear,
} from "react-icons/fa6";
import { MenuItem } from "../interfaces/menuItem.interface";

export const menuDesktopItems: Array<MenuItem> = [
  {
    icon: <></>,
    path: "/",
    name: "Home",
  },
  {
    icon: <></>,
    path: "/properties",
    name: "Properties",
  },
  {
    icon: <></>,
    path: "/properties/sell",
    name: "Sell",
  },
  {
    icon: <></>,
    path: "/properties/rent",
    name: "Rent",
  },
  {
    icon: <></>,
    path: "/about-us",
    name: "About us",
  },
  {
    icon: <></>,
    path: "#",
    name: "Account",
    children: [
      {
        icon: <FaHeart />,
        name: "Favorites",
        path: "/account/favorites",
      },
      {
        icon: <FaUserPlus />,
        name: "My Properties",
        path: "/properties/my-properties",
      },
      // {
      //   icon: <FaGear />,
      //   name: "Settings",
      //   path: "/account/settings",
      // },
      {
        icon: <FaGear />,
        name: "Settings",
        path: "/account/settings",
      },
    ],
  },
];

export const menuMobileItems: Array<MenuItem> = [
  {
    icon: <FaHouse size={20} />,
    path: "/",
    name: "Home",
  },
  {
    icon: <FaLocationDot size={20} />,
    path: "/properties",
    name: "Properties",
  },
  {
    icon: <FaDollarSign size={20} />,
    path: "/properties/sell",
    name: "Sell",
  },
  {
    icon: <FaTags size={20} />,
    path: "/properties/rent",
    name: "Rent",
  },
  {
    icon: <FaHeart size={20} />,
    name: "Favorites",
    path: "/account/favorites",
  },
  {
    icon: <FaUserPlus size={20} />,
    path: "/properties/my-properties",
    name: "My Properties",
  },
  {
    icon: <FaCircleInfo size={20} />,
    path: "/about-us",
    name: "About us",
  },
];
