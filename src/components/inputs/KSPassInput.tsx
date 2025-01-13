"use client";

import { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface Props {
  name?: string;
  className?: string;
  onChange?: any;
  title: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  labelColor?: string;
}

export const KSPassInput = ({
  name="",
  className = "",
  onChange = () => {},
  title,
  required = false,
  placeholder = "",
  defaultValue = "",
  labelColor = "text-ks-dark",
}: Props) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className={`${className} flex justify-center flex-col gap-3`}>
      <label className={`text-lg ${labelColor} font-semibold`} htmlFor={name}>
        {title} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="flex items-center w-full">
        <input
          name={name}
          onChange={onChange}
          className="p-3 rounded-lg text-ks-dark rounded-tr-none rounded-br-none w-full"
          type={visibility ? "text" : "password"}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
        />
        <IconButton
          className=" bg-ks-dark rounded-tl-none rounded-bl-none w-[48px]"
          onClick={() => setVisibility(!visibility)}
          {...({ size: "lg" } as any)}
        >
          {visibility ? <FaEyeSlash /> : <FaEye />}
        </IconButton>
      </div>
    </div>
  );
};
