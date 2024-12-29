"use server";

import prisma from "@/lib/prisma";
import { notificationService } from "@/shared/services/notificationService";
import { Property } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getProperties = async (query = {} as any) => {
  try {
    const properties = await prisma.property.findMany(query);

    return properties;
  } catch (error) {
    return notificationService.error(
      "Ocurrió un error al intentar consultar las propiedades."
    );
  }
};

export const getUserById = async (id: string) => {
  try {
    const property = await prisma.user.findFirst({ where: { id } });

    return property;
  } catch (error) {
    return notificationService.error(
      `Ocurrio un error al intentar cargar el usuario con id: ${id}.`
    );
  }
};

export const getPropertyById = async (id: string) => {
  try {
    const property = await prisma.property.findFirst({ where: { id } });

    return property;
  } catch (error) {
    return notificationService.error(
      `Ocurrio un error al intentar cargar la propiedad ${id}.`
    );
  }
};

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
