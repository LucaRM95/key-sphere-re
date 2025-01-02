import Link from "next/link";
import { PropertyCard } from "@/components";
import { FaArrowRight } from "react-icons/fa6";
import { Property } from "@prisma/client";

interface Props {
  properties: Array<Property>;
}

export const HeroSection = ({ properties }: Props) => {
  return (
    <section className="text-gray-800 p-10 md:p-20 lg:mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Recently Added</h2>
        <Link
          href="/properties"
          className="text-sm font-semibold flex items-center"
        >
          See All <FaArrowRight className="ml-1" />
        </Link>
      </div>
      <p className="text-gray-600 text-sm mt-2">
        There are not many cities that have experienced such social and
        political extremes in recent history.
      </p>
      <div className="grid grid-cols-4 gap-5 lg:gap-0 mt-5 justify-items-center">
        {/** Repeat the property card structure */}
        {properties!.map((prop) => (
          <PropertyCard
            key={prop.id}
            image={prop.images[0]}
            className="col-span-2 md:col-span-1"
            title={prop.title}
            price={prop.price}
            beds={prop.beds}
            baths={prop.baths}
            size={`${prop.area} m²`}
            location={prop.address}
          />
        ))}
      </div>
    </section>
  );
};
