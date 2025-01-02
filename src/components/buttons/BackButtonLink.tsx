"use client";

import { useRouter } from "next/navigation";
import { ActionsKSButton } from "./ActionsKSButton";
import { FaChevronLeft } from "react-icons/fa6";

interface Props {
  className?: string;
}

export const BackButtonLink = ({ className = "" }: Props) => {
  const router = useRouter();

  return (
    <div className={className}>
      <ActionsKSButton
        onClick={() => router.back()}
        icon={<FaChevronLeft className="text-ks-beige" />}
      />
    </div>
  );
};
