import { Mapbox } from "@/components";
import { PropertiesGrid } from "@/properties";
import prisma from "@/lib/prisma";

const MAPBOX_TOKEN = process.env.MAPBOX_API_KEY || "";

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany();
  
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
        <PropertiesGrid properties={properties} />
      </div>
    </div>
  );
}
