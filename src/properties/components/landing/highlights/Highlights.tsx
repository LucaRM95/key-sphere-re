import React from "react";
import {
  FaBuildingCircleCheck,
  FaBusinessTime,
  FaCircleCheck,
} from "react-icons/fa6";

export const Highlights = () => {
  return (
    <section className="text-center bg-[url('/images/neighbourhood.jpg')] bg-cover bg-center mt-20 text-ks-white">
      <div className="w-full h-full bg-ks-dark/60 py-10">
        <h2 className="text-2xl font-bold mb-5">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col items-center gap-5 p-5 text-center">
            <FaCircleCheck size={40} />
            <h3 className="text-xl font-semibold">Verified Listings</h3>
            <p className="text-sm">
              All properties are reviewed and verified by experts.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 p-5 text-center">
            <FaBusinessTime size={50} />
            <h3 className="text-xl font-semibold">Expert Agents</h3>
            <p className="text-sm">
              Connect with the best agents to guide you.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 p-5 text-center">
            <FaBuildingCircleCheck size={50} />
            <h3 className="text-xl font-semibold mt-2">Hassle-Free Process</h3>
            <p className="text-sm">
              List, buy, or rent properties easily with our platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
