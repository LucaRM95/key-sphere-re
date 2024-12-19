import { Property } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import {
  IoHomeOutline,
  IoMoveOutline,
  IoPricetagOutline,
} from "react-icons/io5";

interface Props {
  property: Property;
}

export const PropertyCard = ({ property }: Props) => {
  return (
    <div className="bg-white h-[550px] rounded-xl">
      <div className="relative w-full h-[50%]">
        <Image
          src={property.images[0]}
          alt={property.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
          priority
        />
        <div className="flex justify-center items-center gap-2 absolute top-2 left-2 bg-ks-white text-ks-grey text-xs font-bold px-3 py-1 rounded-full z-10">
          <div
            className={`${
              property.isActive ? "bg-green-500" : "bg-red-500"
            }  h-[8px] w-[8px] rounded-full`}
          ></div>
          <span>{property.isActive ? "Active" : "Inactive"}</span>
        </div>
        <div className="absolute bottom-2 right-2 flex space-x-2 z-10">
          <button className="bg-ks-white p-2 rounded-full shadow hover:bg-gray-100">
            <FaShareAlt className="text-ks-beige" />
          </button>
          <button className="bg-ks-white p-2 rounded-full shadow hover:bg-gray-100">
            <FaHeart className="text-ks-beige" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center h-[50%]">
        <div className="flex justify-between text-ks-beige m-3">
          <div className="text-2xl">
            <h4>{property.title}</h4>
            <span className="text-ks-grey text-[20px]">
              {property.address}
            </span>
          </div>
          <div className="text-[20px] text-end">
            <h6 className="text-ks-grey">Price</h6>
            <span className="text-ks-beige text-[25px]">
              ${property.price.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex justify-start gap-5 m-3 text-ks-grey">
          <div className="flex items-center gap-2">
            <IoHomeOutline size={20} />
            <span>{property.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMoveOutline size={20} />
            <span>{property.area}m²</span>
          </div>
          <div className="flex items-center gap-2">
            <IoPricetagOutline size={20} />
            <span>{property.status}</span>
          </div>
        </div>
        <div className="flex justify-between m-3 bg-gray-200 rounded-xl text-ks-grey p-2">
          <div className="flex flex-col font-semibold text-[14px]">
            <h6>Owner name</h6>
            <span className="text-ks-beige">Caroline Forbes</span>
          </div>
          <div className="w-[2px] bg-gray-300"></div>
          <div className="flex flex-col font-semibold text-[14px]">
            <h6>Owner contact</h6>
            <span className="text-ks-beige">CarolineForbes@mail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
