import React from "react";

interface Props {
    icon: React.ReactNode;
    title: string;
    text: string;
}

export const Widget = ({ icon, title, text }: Props) => {
  return (
    <div className="flex flex-col items-start">
      <label className="text-ks-grey text-[12px]">{ title }</label>
      <div className="flex items-center justify-center gap-1">
        {icon}
        <span> {text}</span>
      </div>
    </div>
  );
};
