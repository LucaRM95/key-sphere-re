import { CarouselCustom } from "@/components";
import prisma from "@/lib/prisma";
import { PropertyDetails } from "@/properties";
import { redirect } from "next/navigation";
import { auth } from "@/auth.config";

export default async function PropertyByIDPage({
  params,
}: {
  params: { id: string };
}) {
  const findedProperty: any = await prisma.property.findFirst({
    where: { id: params.id },
  });
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }

  const slides = findedProperty.images;
 
  return (
    <div className="grid grid-rows-12 lg:grid-cols-12 h-screen">
      <div className="row-span-4 sm:row-span-6 lg:col-span-7 xl:col-span-8 lg:h-screen">
        <CarouselCustom images={slides} />
      </div>
      <div
        className={`flex flex-col row-span-9 lg:col-span-5 xl:col-span-4 
        bg-ks-white border-t-2 border-ks-beige lg:border-l-2 
        lg:border-t-0 h-screen overflow-y-hidden md:p-5`}
      >
        <div className="flex-grow">
          <PropertyDetails isOwner={(session?.user as any)?.id === findedProperty?.userId}  property={findedProperty} />
        </div>
        <div className="bg-ks-beige w-full py-3 mt-auto text-ks-dark p-5 lg:rounded-xl">
          <div className="flex justify-between">
            <div className="text-ks-dark">
              <span className="text-ks-green text-3xl font-bold">365k+</span>
              <p>Reviews</p>
            </div>
            <div className="text-ks-dark">
              <span className="text-ks-green text-3xl font-bold">43k</span>
              <p>Projects</p>
            </div>
            <div className="text-ks-dark">
              <span className="text-ks-green text-3xl font-bold">97%</span>
              <p>Positive Rating</p>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="text-gray-500">
              <span className="text-ks-grey text-3xl font-bold">
                Trusted By
              </span>
              <p>More than 15,000+ brand trust us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
