import { Topbar } from "@/properties";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Key Sphere - Properties",
  description: "All our properties around the world.",
};

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
      <div className="absolute top-0 left-0 right-0 z-10 lg:w-[20%] xl:w-[45%] lg:h-auto xl:h-[60px]">
        <Topbar session={session} />
      </div>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
