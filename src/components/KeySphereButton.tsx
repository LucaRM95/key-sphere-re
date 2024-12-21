"use client";

interface Props {
  icon: React.ReactNode;
  text: string;
}

export const KeySphereButton = ({
  icon,
  text,
}: Props) => {
  return (
    <button
      onClick={() => console.log("Creating new property")}
      className={`
        flex justify-start items-center bg-ks-white 
        h-[36px] self-end rounded-full hover:shadow-md 
        hover:shadow-ks-beige w-[148px]
        `}
    >
      {icon}
      <span className="text-ks-beige p-3">{text}</span>
    </button>
  );
};
