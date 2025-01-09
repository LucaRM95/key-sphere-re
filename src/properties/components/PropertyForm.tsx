"use client";

import {
  BackButtonLink,
  KeySphereButton,
  KSphereInput,
  SelectInput,
} from "@/components";
import { FaPencil, FaPlus } from "react-icons/fa6";

import { booleanParser, Property, useForm } from "@/shared";
import { useEffect } from "react";

const options = [
  { value: "rent", title: "Rent" },
  { value: "sell", title: "Sell" },
];

const optionsActive = [
  { value: true, title: "Active" },
  { value: false, title: "Inactive" },
];

interface Props {
  userId: string;
  defaultState: Property;
  editProperty?: boolean;
}

export const PropertyForm = ({
  userId,
  defaultState,
  editProperty = false,
}: Props) => {
  const { value, setValue, onCreateProperty, onEditProperty } = useForm(
    "The property has been created successfully.",
    "An error has occurred.",
    userId,
    defaultState
  );

  return (
    <div className="flex flex-col gap-10 p-5 overflow-y-scroll">
      <div className="flex flex-col gap-1 text-ks-dark">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-green-300 w-[5px] h-[5px] rounded-full"></div>
            <span className="text-green-300 text-[10px]">
              {"Turn Your Property Into Profit".toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-5 md:gap-10">
            <BackButtonLink />
            <span className="text-2xl font-bold">
              List It Here and Reach Thousands Today!
            </span>
          </div>
        </div>
      </div>
      <form
        className="grid grid-cols-6 gap-10 text-ks-dark"
        onSubmit={editProperty ? onEditProperty : onCreateProperty}
      >
        <KSphereInput
          onChange={(e: any) => setValue({ ...value, title: e.target.value })}
          className="col-span-6 lg:col-span-3"
          type="text"
          title="Property Title"
          placeholder={
            editProperty ? defaultState.title : "Edinburgh Old Town Flat"
          }
          defaultValue={editProperty ? defaultState.title : ""}
          required
        />
        <KSphereInput
          onChange={(e: any) => setValue({ ...value, address: e.target.value })}
          className="col-span-6 lg:col-span-3"
          type="text"
          title="Address"
          placeholder={editProperty ? defaultState.address : "Royal Mile 200"}
          defaultValue={editProperty ? defaultState.address : ""}
          required
        />
        <KSphereInput
          onChange={(e: any) =>
            setValue({ ...value, description: e.target.value })
          }
          className="col-span-6"
          type="description"
          title="Description"
          placeholder={
            editProperty ? defaultState.description : "Royal Mile 200"
          }
          defaultValue={editProperty ? defaultState.description : ""}
        />
        <KSphereInput
          onChange={(e: any) => setValue({ ...value, type: e.target.value })}
          className="col-span-6"
          type="text"
          title="Type"
          placeholder={editProperty ? defaultState.type : "Apartment"}
          defaultValue={editProperty ? defaultState.type : ""}
          required
        />
        <SelectInput
          onChange={(e: any) => setValue({ ...value, status: e.target.value })}
          withLabel
          title="Status"
          className="!bg-white !border-none !m-0 !p-2 !rounded-lg"
          defaultValue={editProperty ? defaultState.status : ""}
          options={options}
        />
        <SelectInput
          onChange={(e: any) =>
            setValue({ ...value, isActive: booleanParser(e.target.value) })
          }
          withLabel
          title="Active"
          className="!bg-white !border-none !m-0 !p-2 !rounded-lg"
          defaultValue={editProperty ? defaultState.isActive : ""}
          options={optionsActive}
        />
        <KSphereInput
          onChange={(e: any) =>
            setValue({ ...value, area: parseFloat(e.target.value) })
          }
          className="col-span-6 lg:col-span-3"
          type="number"
          title="Area"
          placeholder={editProperty ? `${defaultState.area}` : "32"}
          defaultValue={editProperty ? `${defaultState.area}` : ""}
        />
        <KSphereInput
          onChange={(e: any) =>
            setValue({ ...value, beds: parseInt(e.target.value) })
          }
          className="col-span-6 lg:col-span-3"
          type="number"
          title="Bedrooms"
          placeholder={editProperty ? `${defaultState.beds}` : "2"}
          defaultValue={editProperty ? `${defaultState.beds}` : ""}
        />
        <KSphereInput
          onChange={(e: any) =>
            setValue({ ...value, baths: parseInt(e.target.value) })
          }
          className="col-span-6 lg:col-span-3"
          type="number"
          title="Bathrooms"
          placeholder={editProperty ? `${defaultState.baths}` : "2"}
          defaultValue={editProperty ? `${defaultState.baths}` : ""}
        />
        <KSphereInput
          onChange={(e: any) =>
            setValue({ ...value, price: parseFloat(e.target.value) })
          }
          className="col-span-6 lg:col-span-3"
          type="number"
          title="Price"
          placeholder={editProperty ? `${defaultState.price}` : "3200"}
          defaultValue={editProperty ? `${defaultState.price}` : ""}
          required
        />
        <KeySphereButton
          type="submit"
          text={editProperty ? "Edit" : "Create"}
          isButton
          icon={
            editProperty ? (
              <FaPencil className="!text-ks-dark h-full" />
            ) : (
              <FaPlus className="!text-ks-dark h-full" />
            )
          }
        />
      </form>
    </div>
  );
};
