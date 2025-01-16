import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";
import { PropertiesLayout } from "@/properties";
import { redirect } from "next/navigation";

export default async function MyPropertiesPage() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin");
  }

  const userId = await prisma.user.findUnique({
    where: { email: user?.email ?? "" },
  });
  const properties = await prisma.property.findMany({
    where: { userId: userId?.id },
  });

  return (
    <PropertiesLayout properties={properties} pGridTitle="My Properties" />
  );
}
