import { auth } from "@/auth.config";
import { Mapbox } from "@/components";
import prisma from "@/lib/prisma";
import { PropertiesGrid } from "@/properties";
import { redirect } from "next/navigation";

const MAPBOX_TOKEN = process.env.MAPBOX_API_KEY || "";

export default async function MyPropertiesPage() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin");
  }

  const userId = await prisma.user.findUnique({
    where: { email: user?.email ?? "" },
  });
  const properties = await prisma.property.findMany({
    where: { userId: userId?.id },
  });

  return (
    <div className="grid grid-rows-12 lg:grid-cols-12 h-screen">
      <div className="row-span-4 sm:row-span-6 lg:col-span-7 xl:col-span-6 lg:h-screen">
        <Mapbox properties={properties} mapbox_key={MAPBOX_TOKEN} />
      </div>
      <div
        className={`
                scrollable-content row-span-8 sm:row-span-6 lg:col-span-5 xl:col-span-6
                bg-ks-white h-screen overflow-y-scroll md:p-5
              `}
      >
        <PropertiesGrid properties={properties} title="My Properties" />
      </div>
    </div>
  );
}
