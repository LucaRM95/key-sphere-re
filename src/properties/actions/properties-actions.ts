"use server";

import prisma from "@/lib/prisma";
import { notificationService } from "@/shared/services/notificationService";
import { Property } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const addProperty = async (property: Property): Promise<void> => {
  try {
    await prisma.property.create({ data: property });

    revalidatePath("/properties");
    return notificationService.success("Propiedad creada correctamente.");
  } catch (error) {
    return notificationService.success(
      "Ocurrió un error al intentar crear la propiedad."
    );
  }
};
