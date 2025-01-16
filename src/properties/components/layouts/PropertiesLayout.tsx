import { Mapbox } from "@/components";
import { Property } from "@prisma/client";
import React from "react";
import { PropertiesGrid } from "../PropertiesGrid";

interface Props {
  pGridTitle?: string;
  hiddenInactive?: boolean;
  properties: Array<Property>;
}

const MAPBOX_TOKEN = process.env.MAPBOX_API_KEY || "";

export const PropertiesLayout = ({
  pGridTitle = "Find your home",
  hiddenInactive = false,
  properties,
}: Props) => {
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
        <PropertiesGrid
          properties={properties}
          title={pGridTitle}
          hiddenInactive={hiddenInactive}
        />
      </div>
    </div>
  );
};
