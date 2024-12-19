import React from "react";
import { PropertyCard } from "./PropertyCard";
import { Property } from "@prisma/client";
import { IoAdd } from "react-icons/io5";
import { SelectInput } from "@/components";

interface Props {
    properties: Array<Property>;
}

export const PropertiesGrid = ({ properties }: Props) => {
  return (
    <div className="grid m-3 gap-10">
        <div className="flex w-full justify-between items-center mt-3">
          <SelectInput />
          <button className="flex justify-center items-center bg-ks-white rounded w-[36px] h-[36px] p-2 self-end">
            <IoAdd className="text-ks-grey" />
          </button>
        </div>
        {properties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
        ))}
    </div>
  );
};
