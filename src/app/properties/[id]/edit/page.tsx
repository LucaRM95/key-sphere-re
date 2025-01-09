import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { PropertyForm } from "@/properties";
import { redirect } from "next/navigation";

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  if (!id) {
    redirect("/properties");
  }

  const session = await getUserSessionServer();
  if (!session) {
    redirect("/api/auth/signin");
  }

  const findedProperty = await prisma.property.findFirst({
    where: { id },
  });

  if (!findedProperty || session?.id !== findedProperty.userId) {
    redirect("/properties");
  }

  return (
    <div className="grid grid-rows-12 lg:grid-cols-12 h-screen">
      <div className="row-span-4 sm:row-span-6 lg:col-span-7 xl:col-span-8 lg:h-screen">
        TODO: Images over here
      </div>
      <div
        className={`
        flex flex-col row-span-9 lg:col-span-5 xl:col-span-4 
        bg-ks-white border-t-2 border-ks-beige lg:border-l-2 
        lg:border-t-0 h-screen overflow-y-hidden md:p-5 text-ks-dark`}
      >
        <PropertyForm
          defaultState={findedProperty}
          userId={session?.id || ""}
          editProperty
        />
      </div>
    </div>
  );
}
