import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export const CTASection = () => {
  return (
    <section className="flex flex-col items-between lg:p-10">
      <div className="flex flex-col items-center mb-20 p-10 pb-0">
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
              Selling your home? Let our expert agents help you achieve the best
              results.
            </h4>
            <Link
              href="/properties"
              className="text-sm lg:text-xs font-semibold flex items-center text-ks-beige hover:underline"
            >
              List Your Property <FaArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="w-full h-[250px] lg:h-[480px] lg:w-[420px] xl:w-[620px] bg-cover bg-center bg-[url('/images/fancy-house.jpg')]"></div>
        </div>
        <div className="bg-ks-dark rounded-tl-full rounded-br-full">
          <div className="hidden 2lg:flex lg:h-[560px] lg:w-[620px] bg-contain bg-no-repeat bg-center bg-[url('/images/real-estate-agent-female.png')] self-end"></div>
        </div>
      </div>

      <div className="flex justify-evenly mt-20">
        <div className="bg-ks-beige rounded-bl-full rounded-tr-full">
          <div className="hidden 2lg:flex lg:h-[560px] lg:w-[620px] bg-contain bg-no-repeat bg-center bg-[url('/images/real-estate-agent-male.png')] self-end"></div>
        </div>
        <div className="relative flex flex-col bg-ks-dark text-ks-white lg:flex-row lg:items-center lg:justify-between lg:p-10 self-end">
          <div className="bg-[url('https://images.unsplash.com/photo-1568605114967-8130f3a36994')] bg-cover h-[250px] lg:h-[480px] lg:w-[420px] xl:w-[620px]"></div>
          <div className="lg:absolute lg:top-0 lg:left-0 lg:-translate-x-12 lg:translate-y-full flex flex-col items-center text-center gap-5 bg-ks-beige text-ks-dark p-5 lg:p-10 lg:w-[430px]">
            <h4 className="text-xl lg:text-lg font-semibold">
              Looking for a rental? Let our experts guide you to the perfect
              home.
            </h4>
            <Link
              href="/properties"
              className="text-sm lg:text-xs font-semibold flex items-center text-ks-dark hover:underline"
            >
              Find Rental Opportunities <FaArrowRight className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
