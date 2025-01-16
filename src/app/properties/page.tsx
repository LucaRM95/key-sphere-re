import { PropertiesLayout } from "@/properties";
import prisma from "@/lib/prisma";

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany();

  return <PropertiesLayout properties={properties} hiddenInactive />;
}
