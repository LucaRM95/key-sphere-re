import { getUserSessionServer } from "@/auth/actions/auth-actions";
import { Mapbox } from "@/components";
import prisma from "@/lib/prisma";
import { PropertiesGrid } from "@/properties";

const MAPBOX_TOKEN = process.env.MAPBOX_API_KEY || "";

export default async function MyPropertiesPage() {
  const sessionUser = await getUserSessionServer();
  const userId = await prisma.user.findUnique({
    where: { email: sessionUser?.email ?? "" },
  });
  const properties = await prisma.property.findMany({
    where: { userId: userId?.id }
  });

  return (
    <div className="grid grid-rows-12 lg:grid-cols-12 h-screen">
      <div className="row-span-4 sm:row-span-6 lg:col-span-7 xl:col-span-8 lg:h-screen">
        <Mapbox properties={properties} mapbox_key={MAPBOX_TOKEN} />
      </div>
      <div
        className={`
            scrollable-content row-span-8 sm:row-span-6 lg:col-span-5 xl:col-span-4
            bg-ks-white h-screen overflow-y-scroll md:p-5
          `}
      >
        <PropertiesGrid properties={properties} title="My Properties" />
      </div>
    </div>
  );
}
