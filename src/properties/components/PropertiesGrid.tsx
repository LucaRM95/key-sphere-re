import { PropertyCard } from "./PropertyCard";
import { Property } from "@prisma/client";
import { KeySphereButton, SelectInput } from "@/components";
import { IoAdd } from "react-icons/io5";

interface Props {
  properties: Array<Property>;
}

export const PropertiesGrid = ({ properties }: Props) => {
  return (
    <div className="grid m-3 gap-10 sm:pl-20 sm:pr-20 lg:p-0">
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="bg-green-300 w-[6px] h-[5px] rounded-full"></div>
            <span className="text-green-300 text-[10px]">
              {"Unlock your new life".toUpperCase()}
            </span>
          </div>
          <span className="text-2xl font-bold">Find your home</span>
        </div>
        <KeySphereButton
          icon={
            <IoAdd
              size={30}
              className="text-ks-grey bg-ks-beige h-full rounded-tl-full rounded-bl-full p-2"
            />
          }
          text="Add Property"
        />
      </div>
      <div className="flex w-full justify-between items-center mt-3">
        <SelectInput />
      </div>
      {properties.map((prop) => (
        <PropertyCard key={prop.id} property={prop} />
      ))}
    </div>
  );
};
