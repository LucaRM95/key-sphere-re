"use client";

import { Switch } from "@material-tailwind/react";

export const KSphereSwitch = () => {
  return (
    <div className="flex gap-2 text-sm">
      <Switch
        {...({
          id: "custom-switch-component",
          ripple: false,
          className: "h-full w-full checked:bg-[#0ACF83]",
          containerProps: {
            className: "w-11 h-6",
          },
          circleProps: {
            className: "before:hidden left-0.5 border-none",
          },
        } as any)}
      />
      <span>Remember me</span>
    </div>
  );
};
