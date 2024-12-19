import { Topbar } from "@/properties/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key Sphere - Properties",
  description: "All our's properties arround the world.",
};

export default function PropertiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen">
      <Topbar />
      <div className="flex flex-col h-screen w-full">{children}</div>
    </div>
  );
}
