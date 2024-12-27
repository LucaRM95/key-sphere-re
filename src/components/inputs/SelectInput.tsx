import {
  Select,
  Description,
  Field,
  Label,
} from "@headlessui/react";
import clsx from "clsx";
import { IoArrowUp, IoChevronDown } from "react-icons/io5";

export const SelectInput = () => {
  return (
    <div className="w-full max-w-md pe-4">
      <Field> 
        <div className="relative">
          <Select
            className={clsx(
              'block w-full appearance-none rounded-lg border-2 border-ks-beige bg-ks-white py-1.5 px-3 text-sm/6 text-ks-grey',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-ks-grey',
              '*:text-ks-grey'
            )}
          >
            <option value="lowest_price">Lowest price ↑</option>
            <option value="highest_price">Highest rice ↓</option>
            <option value="lowest_area">Lowest area ↑</option>
            <option value="highest_area">Highest area ↓</option>
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
          </Select>
          <IoChevronDown
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 text-ks-grey"
            aria-hidden="true"
          />
        </div>
      </Field>
    </div>
  );
};
