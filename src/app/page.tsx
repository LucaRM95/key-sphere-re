import { Topbar } from "@/properties";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getProperties } from "@/properties/actions/properties-actions";
import { PropertyCard } from "@/components";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const properties = await getProperties({ take: 4 });

  return (
    <div className="flex flex-col bg-ks-white">
      <div className="relative bg-[url('/images/fancy-house.jpg')] bg-cover bg-center h-[480px] lg:h-[680px]">
        <Topbar withoutBg session={session} />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-center text-white p-5">
          <h1 className="text-4xl font-bold">
            Buy, Sell and Rent your property in one place!
          </h1>
          <p className="text-sm mt-2">
            There are not many cities that have experienced such social and
            political extremes in recent history as much as Amsterdam.
          </p>
        </div>
      </div>
      <div className="lg:absolute lg:top-[38.5rem] lg:left-[10%] lg:w-[880px] lg:p-10 flex flex-wrap items-center justify-around lg:justify-between gap-5 bg-ks-dark p-5">
        <select className="p-3 text-sm rounded bg-transparent text-ks-white font-semibold">
          <option className="text-ks-dark">Looking for</option>
          <option className="text-ks-dark">Buy</option>
          <option className="text-ks-dark">Rent</option>
        </select>
        <select className="p-3 text-sm rounded bg-transparent text-ks-white font-semibold">
          <option className="text-ks-dark">City</option>
          <option className="text-ks-dark">Miami</option>
          <option className="text-ks-dark">San Francisco</option>
        </select>
        <select className="p-3 text-sm rounded bg-transparent text-ks-white font-semibold">
          <option className="text-ks-dark">Price Limit</option>
          <option className="text-ks-dark">$100k-$300k</option>
          <option className="text-ks-dark">$300k-$500k</option>
        </select>
        <button className="p-3 bg-ks-beige text-ks-dark font-semibold rounded lg:w-[120px]">
          Search
        </button>
      </div>
      <div className="text-gray-800 p-10 md:p-20 lg:mt-10">
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
        <div className="grid grid-cols-4 gap-5 mt-5">
          {/** Repeat the property card structure */}
          {properties!.map((prop) => (
            <PropertyCard
              image={prop.images[0]}
              className="col-span-2 md:col-span-1"
              title={prop.title}
              price={prop.price}
              beds="6"
              baths="4"
              size={`${prop.area} m²`}
              location={prop.address}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-between lg:p-10">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-3xl font-bold text-ks-dark">
            Stop searching and start living
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            There are not many cities that have experienced such social and
            political extremes in recent history.
          </p>
        </div>
        <div className="flex justify-evenly">
          <div className="relative flex flex-col bg-ks-beige text-ks-dark lg:flex-row lg:items-center lg:justify-between lg:p-10 self-start">
            <div className="lg:absolute lg:top-0 lg:left-0 lg:translate-x-3/4 lg:translate-y-full flex flex-col items-center text-center gap-5 bg-ks-dark text-ks-beige p-5 lg:p-10 lg:w-[430px]">
              <h4 className="text-xl lg:text-lg font-semibold">
                Listing your home with Agency Real Estate agent for a successful
                selling.
              </h4>
              <Link
                href="/properties"
                className="text-sm lg:text-xs font-semibold flex items-center text-ks-beige hover:underline"
              >
                Sell a home <FaArrowRight className="ml-1" />
              </Link>
            </div>
            <div className="w-full h-[250px] lg:h-[480px] lg:w-[620px] bg-cover bg-center bg-[url('/images/fancy-house.jpg')]"></div>
          </div>
          <div className="bg-ks-dark rounded-tl-full rounded-br-full">
            <div className="hidden lg:flex lg:h-[560px] lg:w-[620px] bg-contain bg-no-repeat bg-center bg-[url('/images/real-estate-agent-female.png')] self-end"></div>
          </div>
        </div>

        <div className="flex justify-evenly mt-20">
          <div className="bg-ks-beige rounded-bl-full rounded-tr-full">
            <div className="hidden lg:flex lg:h-[560px] lg:w-[620px] bg-contain bg-no-repeat bg-center bg-[url('/images/real-estate-agent-male.png')] self-end"></div>
          </div>
          <div className="relative flex flex-col bg-ks-dark text-ks-white lg:flex-row lg:items-center lg:justify-between lg:p-10 self-end">
            <div className="bg-[url('https://images.unsplash.com/photo-1568605114967-8130f3a36994')] bg-cover h-[250px] lg:h-[480px] lg:w-[620px]"></div>
            <div className="lg:absolute lg:top-0 lg:left-0 lg:-translate-x-12 lg:translate-y-full flex flex-col items-center text-center gap-5 bg-ks-beige text-ks-dark p-5 lg:p-10 lg:w-[430px]">
              <h4 className="text-xl lg:text-lg font-semibold">
                Listing your home with Agency Real Estate agent for a successful
                selling.
              </h4>
              <Link
                href="/properties"
                className="text-sm lg:text-xs font-semibold flex items-center text-ks-dark hover:underline"
              >
                Rent a home <FaArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-ks-dark text-ks-white p-10 mt-[10rem]">
        <div className="grid grid-cols-3 gap-5">
          <div>
            <h5 className="font-bold">Logo</h5>
            <p>Social media links</p>
          </div>
          <div>
            <h5 className="font-bold">Quick Links</h5>
            <p>Contact Us</p>
            <p>Remain updated</p>
          </div>
          <div>
            <p>All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
