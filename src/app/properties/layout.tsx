import { Topbar } from "@/properties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key Sphere - Properties",
  description: "All our properties around the world.",
};

export default function PropertiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-screen scrollable-content">
      <div className="absolute top-0 left-0 right-0 z-10 lg:w-[20%] xl:w-[50%] lg:h-auto xl:h-[60px]">
        <Topbar />
      </div>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
