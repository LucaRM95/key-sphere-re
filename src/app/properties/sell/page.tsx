import prisma from "@/lib/prisma";
import { PropertiesLayout } from "@/properties";
import React from "react";

export default async function SellPage() {
  const properties = await prisma.property.findMany({
    where: { status: "sale" },
  });

  return (
    <PropertiesLayout
      properties={properties}
      pGridTitle="Buy a property"
      hiddenInactive
    />
  );
}
