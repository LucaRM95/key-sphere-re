import type { Property } from "@prisma/client";
import { KeySphereButton, Mapbox, VerticalSeparator } from "@/components";
import {
  IoHome,
  IoLocationSharp,
  IoMail,
  IoPencilSharp,
  IoPersonSharp,
} from "react-icons/io5";
import { BiSolidDollarCircle } from "react-icons/bi";
import { Widget } from "./Widget";
import { FaHeart, FaShareAlt } from "react-icons/fa";

const MAPBOX_TOKEN = process.env.MAPBOX_API_KEY || "";

interface Props {
  property: Property;
}

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const PropertyCardData = ({ property }: Props) => {  
  return (
    <div className="grid m-3 gap-5 sm:pl-20 sm:pr-20 lg:p-0">
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="bg-green-300 w-[5px] h-[5px] rounded-full"></div>
            <span className="text-green-300 text-[10px]">
              {"Unlock your new life".toUpperCase()}
            </span>
          </div>
          <h1 className="text-4xl font-bold">{property.title}</h1>
          <div className="flex mt-2 w-full gap-4">
            <div className="flex justify-center items-center gap-2 bg-ks-beige text-ks-dark text-xs font-bold px-3 py-1 rounded-full z-5">
              <div
                className={`${
                  property.isActive ? "bg-green-700" : "bg-red-500"
                }  h-[8px] w-[8px] rounded-full`}
              ></div>
              <span>{property.isActive ? "Active" : "Inactive"}</span>
            </div>
            <div className="flex justify-center items-center gap-2 bg-ks-beige text-ks-dark text-xs font-bold px-3 py-1 rounded-full z-5">
              <span>{capitalize(property.status)}</span>
            </div>
          </div>
          <span className="text-2xl font-normal mt-5">
            {property.description}
          </span>
        </div>
      </div>
      <div className="flex justify-evenly gap-3 bg-ks-white text-ks-dark rounded-xl p-2">
        <Widget
          icon={<IoLocationSharp />}
          title="LOCATION"
          text={property.address}
        />
        <VerticalSeparator />
        <Widget
          icon={<BiSolidDollarCircle />}
          title="PROPERTY PRICE"
          text={property.price.toLocaleString()}
        />
        <VerticalSeparator />
        <Widget
          icon={<IoHome />}
          title="PROPERTY TYPE"
          text={capitalize(property.type)}
        />
      </div>
      <div className="flex h-[220px] lg:h-[180px]">
        <Mapbox mapbox_key={MAPBOX_TOKEN} properties={property} rounded/>
      </div>
      <div className="flex justify-evenly w-full bg-gray-200 rounded-xl text-ks-grey p-2">
        <div className="flex flex-col font-semibold text-[14px]">
          <h6>Owner name</h6>
          <div className="flex items-center gap-2">
            <IoPersonSharp />
            <span className="text-ks-beige">Caroline Forbes</span>
          </div>
        </div>
        <VerticalSeparator />
        <div className="flex flex-col font-semibold text-[14px]">
          <h6>Owner contact</h6>
          <div className="flex items-center gap-2">
            <IoMail />
            <span className="text-ks-beige">CarolineForbes@mail.com</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <KeySphereButton
          icon={
            <IoPencilSharp
              size={30}
              className="text-ks-grey bg-ks-beige h-full rounded-tl-full rounded-bl-full p-2"
            />
          }
          text="Edit Property"
        />
        <div className="flex justify-end w-6/12 gap-5">
          <button className="flex items-center justify-center bg-ks-white rounded-full shadow hover:bg-gray-100 w-[31px] h-[31px]">
            <FaShareAlt className="text-ks-beige" />
          </button>
          <button className="flex items-center justify-center bg-ks-white rounded-full shadow hover:bg-gray-100 w-[31px] h-[31px]">
            <FaHeart className="text-ks-beige" />
          </button>
        </div>
      </div>
    </div>
  );
};
