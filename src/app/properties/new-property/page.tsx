import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PropertyForm } from "@/properties";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const initialState = {
  title: "",
  address: "",
  description: "",
  lat: 0,
  lng: 0,
  images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  ],
  beds: 0,
  baths: 0,
  type: "",
  status: "",
  isActive: false,
  price: 0,
  area: 0,
};

export default async function NewPropertyPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="grid grid-rows-12 lg:grid-cols-12 h-screen">
      <div className="row-span-4 sm:row-span-6 lg:col-span-7 xl:col-span-8 lg:h-screen">
        TODO: Upload images here
      </div>
      <div
        className={`flex flex-col row-span-9 lg:col-span-5 xl:col-span-4 
            bg-ks-white border-t-2 border-ks-beige lg:border-l-2 
            lg:border-t-0 h-screen overflow-y-hidden md:p-5`}
      >
        <PropertyForm
          defaultState={initialState}
          userId={session?.user?.id || ""}
        />
      </div>
    </div>
  );
}
