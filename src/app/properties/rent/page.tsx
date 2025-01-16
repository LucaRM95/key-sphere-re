import prisma from "@/lib/prisma";
import { PropertiesLayout } from "@/properties";

export default async function RentPage() {
  const properties = await prisma.property.findMany({
    where: { status: "rent" },
  });

  return (
    <PropertiesLayout
      properties={properties}
      pGridTitle="Rent a property"
      hiddenInactive
    />
  );
}
