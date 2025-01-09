"use client"

import { Select, Field } from "@headlessui/react";
import clsx from "clsx";
import { useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

interface Props {
  withLabel?: boolean;
  onChange?: any;
  title?: string;
  required?: boolean;
  className?: string;
  options?: Array<{ value: any; title: string }> | null;
  defaultValue?: any;
}

export const SelectInput = ({
  withLabel = false,
  onChange = () => {},
  title = "",
  required = false,
  className = "",
  options = null,
  defaultValue = "",
}: Props) => {
  return (
    <div
      className={`${
        withLabel &&
        "flex justify-center flex-col gap-3 col-span-6 lg:col-span-3"
      } w-full max-w-md`}
    >
      {withLabel && (
        <label className="text-lg text-ks-dark font-semibold" htmlFor="title">
          {title} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <Field>
        <div className="relative">
          <Select
            onChange={onChange}
            className={clsx(
              className,
              "block w-full appearance-none rounded-lg border-2 border-ks-beige bg-ks-white py-1.5 px-3 text-sm/6 text-ks-grey",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-ks-grey",
              "*:text-ks-grey"
            )}
            defaultValue={defaultValue}
          >
            {!options ? (
              <>
                <option value="lowest_price">Lowest price ↑</option>
                <option value="highest_price">Highest rice ↓</option>
                <option value="lowest_area">Lowest area ↑</option>
                <option value="highest_area">Highest area ↓</option>
                <option value="oldest">Oldest</option>
                <option value="newest">Newest</option>
              </>
            ) : (
              <>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.title}
                  </option>
                ))}
              </>
            )}
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
