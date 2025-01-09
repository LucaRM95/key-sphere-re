"use client";

import Link from "next/link";

interface Props {
  path?: string;
  icon: React.ReactNode;
  text: string;
  onClick?: any;
  className?: string;
  type?: "button" | "submit" | "reset";
  isButton?: boolean;
}

export const KeySphereButton = ({
  path = "#",
  icon,
  text,
  onClick = () => {},
  className = "",
  type = "button",
  isButton = false,
}: Props) => {
  const classes = `flex justify-start items-center bg-ks-dark 
          h-[36px] self-end rounded-full hover:shadow-md 
          hover:shadow-ks-grey w-[148px] ${className}`; 

  return (
    <>
      {isButton ? (
        <button type={type} onClick={onClick} className={classes}>
          <div className="w-[35px] h-full bg-ks-beige rounded-tl-full rounded-bl-full p-2">{icon}</div>
          <span className="text-sm text-ks-beige p-3 font-semibold">
            {text}
          </span>
        </button>
      ) : (
        <Link onClick={onClick} href={path} className={classes}>
          {icon}
          <span className="text-sm text-ks-beige p-3 font-semibold">
            {text}
          </span>
        </Link>
      )}
    </>
  );
};
