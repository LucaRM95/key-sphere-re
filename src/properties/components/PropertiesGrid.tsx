import { PropertyCard } from "./cards/PropertyCard";
import { Property } from "@prisma/client";
import { KeySphereButton, NoDataAvailable, SelectInput } from "@/components";
import { FaPlus } from "react-icons/fa6";

interface Props {
  properties: Array<Property>;
  title?: string;
  hiddenInactive?: boolean;
}

export const PropertiesGrid = ({
  properties,
  title = "Find your home",
  hiddenInactive = false,
}: Props) => {
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
          <h1 className="text-3xl font-bold text-ks-dark">{title}</h1>
        </div>
        <KeySphereButton
          path="/properties/new-property"
          icon={
            <FaPlus
              size={30}
              className="text-ks-dark bg-ks-beige h-full rounded-tl-full rounded-bl-full p-2"
            />
          }
          text="Add Property"
        />
      </div>
      <div className="flex w-full justify-between items-center mt-3">
        <SelectInput />
      </div>
      <div className="grid grid-cols-2 gap-5">
        {properties.length > 0 ? (
          properties.map((prop) => (
            <>
              {hiddenInactive ? (
                prop.isActive ? (
                  <PropertyCard key={prop.id} property={prop} />
                ) : (
                  <></>
                )
              ) : (
                <PropertyCard key={prop.id} property={prop} />
              )}
            </>
          ))
        ) : (
          <NoDataAvailable />
        )}
      </div>
    </div>
  );
};
