import { CarouselCustom } from "@/components";
import prisma from "@/lib/prisma";
import { PropertyCardData } from "@/properties";

export default async function EditPropertyPage({
  params,
}: {
  params: { id: string };
}) {
  const findedProperty: any = await prisma.property.findFirst({
    where: { id: params.id },
  });

  return (
    <div className="grid grid-rows-12 lg:grid-cols-12 h-screen">
      <div className="row-span-4 sm:row-span-6 lg:col-span-7 xl:col-span-8 lg:h-screen">
        TODO: Images over here
      </div>
      <div
        className={`flex flex-col row-span-9 lg:col-span-5 xl:col-span-4 
        bg-ks-blue border-t-2 border-ks-beige lg:border-l-2 
        lg:border-t-0 h-screen overflow-y-hidden md:p-5`}
      >
        TODO: Form here
        { JSON.stringify(findedProperty) }
      </div>
    </div>
  );
}
