import { ActionsKSButton, VerticalSeparator } from "@/components";
import { Property } from "@prisma/client";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

import { PropertiesActions } from "@/properties/index";

import { FaHouse, FaRulerHorizontal, FaTag, FaHeart, FaPen, FaShareNodes, FaBed, FaBath } from "react-icons/fa6";
import { auth } from "@/auth.config";

interface Props {
  property: Property;
}

export const PropertyCard = async ({ property }: Props) => {  
  const session = await auth();
  const sessionUser = session?.user;
  const user = await PropertiesActions.getUserById(property.userId);

  return (
    <div className="col-span-2 xl:col-span-1 bg-ks-beige  h-[550px] rounded">
      <div className="relative w-full h-[50%]">
        <Link href={`/properties/${property.id}`}>
          <Image
            src={property.images[0]}
            alt={property.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t"
            priority
          />
        </Link>
        <div className="flex justify-center items-center gap-2 absolute top-2 left-2 bg-ks-beige text-ks-dark text-xs font-bold px-3 py-1 rounded-full z-5">
          <div
            className={`${
              property.isActive ? "bg-green-500" : "bg-red-500"
            }  h-[8px] w-[8px] rounded-full`}
          ></div>
          <span>{property.isActive ? "Active" : "Inactive"}</span>
        </div>
        <div className="absolute bottom-2 right-2 flex space-x-2 z-5">
          {user?.email === sessionUser?.email && (
            <ActionsKSButton
              isLink
              href={`/properties/${property.id}/edit`}
              icon={<FaPen className="text-ks-beige" />}
            />
          )}
          <ActionsKSButton icon={<FaShareNodes className="text-ks-beige" />} />
          <ActionsKSButton icon={<FaHeart className="text-ks-beige" />} />
        </div>
      </div>
      <div className="flex flex-col justify-center h-[50%]">
        <div className="flex justify-between text-ks-dark m-3">
          <div className="text-2xl">
            <h4 className="font-semibold">{property.title}</h4>
            <span className="text-ks-grey text-[20px]">{property.address}</span>
          </div>
          <div className="text-[20px] text-end">
            <h6 className="text-ks-grey">Price</h6>
            <span className="text-ks-dark text-[25px] font-semibold">
              ${property.price.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-start gap-5 md:gap-2 m-3 text-ks-grey">
          <div className="flex items-center gap-2">
            <FaHouse />
            <span>{property.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRulerHorizontal />
            <span>{property.area}m²</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBed />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBath />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTag />
            <span>{property.status}</span>
          </div>
        </div>
        <div className="flex justify-between m-3 bg-ks-dark rounded text-ks-white p-2">
          <div className="flex flex-col font-semibold text-[14px]">
            <h6>Owner name</h6>
            <span className="text-ks-beige">{user?.name ?? "No user"}</span>
          </div>
          <VerticalSeparator />
          <div className="flex flex-col font-semibold text-[14px]">
            <h6>Owner contact</h6>
            <span className="text-ks-beige">{user?.email ?? "No email"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
