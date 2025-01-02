import React from "react";
import { IPersonal } from "@/shared";
import { PersonalCard } from "../../cards/PersonalCard";

const personal: Array<IPersonal> = [
  { name: "Maia Watson", position: "Sales Leader", image: "/images/employee-female1.png"},
  { name: "Charles Thompson", position: "Sales Agent Sr", image: "/images/employee-male1.png"},
  { name: "Lara Dickinson", position: "Sales Representative", image: "/images/employee-female2.png"},
  { name: "Luke Wilson", position: "Sales Leader", image: "/images/employee-male2.png"},
]

export const OurTeam = () => {
  return (
    <section className="text-ks-dark py-10">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold text-center">
          Meet Our Team
        </h2>
        <span className="text-gray-600">We are here to give you the key to your new life!</span>
      </div>
      <div className="grid grid-cols-4 gap-24 lg:gap-5 xl:gap-0 p-5 justify-items-center mt-10"> 
        { personal.map( employee => (
          <PersonalCard employee={employee} className="col-span-4 lg:col-span-1" />
        ))}
      </div>
    </section>
  );
};
