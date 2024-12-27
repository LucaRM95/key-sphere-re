"use client";

import Link from "next/link";

interface Props {
  path: string;
  icon: React.ReactNode;
  text: string;
  onClick?: any;
  className?: string;
  isButton?: boolean;
}

export const KeySphereButton = ({
  path,
  icon,
  text,
  onClick = () => {},
  className = "",
  isButton = false,
}: Props) => {
  const classes = `flex justify-start items-center bg-ks-dark 
          h-[36px] self-end rounded-full hover:shadow-md 
          hover:shadow-ks-grey w-[148px] ${className}`;

  return (
    <>
      {isButton ? (
        <button onClick={onClick} className={classes}>
          {icon}
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
