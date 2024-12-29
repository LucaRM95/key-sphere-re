"use client"

import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface Props {
    totalPages: number;

}

export function KsPagination({ totalPages }: Props) {
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-8">
      <IconButton
        {...({
          size: "sm",
          variant: "outlined",
          onClick: prev,
          disabled: active === 1,
        } as any)}
      >
        <FaArrowLeft strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography {...({ color: "gray", className: "font-normal" } as any)}>
        Page <strong className="text-gray-900">{active}</strong> of{" "}
        <strong className="text-gray-900">{ totalPages }</strong>
      </Typography>
      <IconButton
        {...({
          size: "sm",
          variant: "outlined",
          onClick: next,
          disabled: active === totalPages,
        } as any)}
      >
        <FaArrowRight strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
