import { Mapbox } from "@/components";
import { PropertiesGrid } from "@/properties/components";
import prisma from "@/lib/prisma";

const MAPBOX_TOKEN = process.env.MAPBOX_API_KEY || "";

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany();

  return (
    <div className="grid grid-rows-12 lg:grid-cols-12 h-screen">
      <div className="row-span-3 lg:col-span-7 xl:col-span-8 lg:h-screen">
        <Mapbox properties={properties} mapbox_key={MAPBOX_TOKEN} />
      </div>
      <div className="row-span-9 lg:col-span-5 xl:col-span-4 bg-ks-blue h-screen overflow-y-scroll md:p-5">
        <PropertiesGrid properties={properties} />
      </div>
    </div>
  );
}
