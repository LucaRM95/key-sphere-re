import { Topbar } from "@/properties";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { IoHeartOutline, IoHomeOutline, IoLayersOutline, IoLogOutOutline, IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Key Sphere - Properties",
  description: "All our properties around the world.",
};


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

export default async function PropertiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="relative h-screen scrollable-content">
      <div className="absolute top-0 left-0 right-0 z-10 lg:w-[20%] xl:w-[50%] lg:h-auto xl:h-[60px]">
        <Topbar menuItems={menuItems} session={session} />
      </div>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
