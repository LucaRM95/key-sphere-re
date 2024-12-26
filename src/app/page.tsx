import { HorizontalSeparator } from "@/components";
import { Topbar } from "@/properties";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import {
  IoArrowForward,
  IoHeartOutline,
  IoHomeOutline,
  IoLayersOutline,
  IoLogOutOutline,
  IoNotificationsOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { authOptions } from "./api/auth/[...nextauth]/route";

const menuItems = [
  {
    icon: <IoHomeOutline size={25} />,
    path: "/",
    name: "Home",
  },
  {
    icon: <IoLayersOutline size={25} />,
    path: "/properties",
    name: "Properties",
  },
  {
    icon: <IoLayersOutline size={25} />,
    path: "/my-properties",
    name: "My Properties",
  },
  {
    icon: <IoHeartOutline size={25} />,
    path: "/favorites",
    name: "Favorites",
  },
  { icon: <IoPersonOutline size={25} />, path: "/account", name: "Account" },
];

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col">
      <div className="bg-[url('/images/fancy-house.jpg')] h-[480px] bg-cover">
        <Topbar menuItems={menuItems} withoutBg session={session} />
      </div>
      {/* <div>float div with a property searcher</div> */}
      {/*Last Added Properties cards*/}
      <div className="flex flex-col gap-5 bg-ks-white text-ks-dark p-10">
        <h2 className="text-3xl font-bold">Recently Added</h2>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold">
            There are not many cities that have experienced such social.
          </span>
          <Link
            className="flex items-center text-xs font-bold"
            href="/properties"
          >
            <span>See All</span>
            <IoArrowForward size={25} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {/* LANDING PAGE CARD */}
          <div className="col-span-1 w-full">
            <div className="flex items-end bg-[url('/images/fancy-house.jpg')] w-full h-[225px] bg-cover text-ks-white p-3 rounded">
              <span className="text-md font-semibold">
                The
                <br />
                Willows
              </span>
            </div>
            <span className="text-ks-dark font-semibold">$185,000</span>
            <div className="text-sm text-gray-500">
              <div className="flex">
                <span className="border-r border-1 border-gray-500 pr-1">
                  6 beds
                </span>
                <span className="border-r border-1 border-gray-500 pr-1 pl-1">
                  4 baths
                </span>
                <span className="pl-1">163 m²</span>
              </div>
              <div>
                <span>San Francisco CA 94205, USA</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 w-full">
            <div className="flex items-end bg-[url('/images/fancy-house.jpg')] w-full h-[225px] bg-cover text-ks-white p-3 rounded">
              <span className="text-md font-semibold">
                Rose
                <br />
                Villa
              </span>
            </div>
            <span className="text-ks-dark font-semibold">$150,000</span>
            <div className="text-sm text-gray-500">
              <div className="flex">
                <span className="border-r border-1 border-gray-500 pr-1">
                  6 beds
                </span>
                <span className="border-r border-1 border-gray-500 pr-1 pl-1">
                  4 baths
                </span>
                <span className="pl-1">163 m²</span>
              </div>
              <div>
                <span>San Francisco CA 94205, USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Presentation cards*/}
      <div className="flex flex-col h-[450px] ">
        <div className="flex flex-col gap-5 items-center bg-ks-beige h-[200px] p-3">
          <h4 className="text-xl font-semibold text-ks-dark">We provide you the simple ways to invest in Real Estate</h4>
          <span className="text-ks-dark">
            This is an investment as old as the practice of land proper
            ownership. A person will buy a property and rent it out to a tenant.
            Investing in a real estate.
          </span>
        </div>
        <div className="bg-[url('/images/fancy-house.jpg')] bg-cover h-[250px]"></div>
      </div>
      {/*Footer*/}
      <footer className="bg-ks-white h-[250px]"></footer>
    </div>
  );
}
