"use server";

import prisma from "@/lib/prisma";
import { Property } from "@/shared";

export const getProperties = async (query = {} as any) => {
  try {
    const properties = await prisma.property.findMany(query);

    return properties;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const property = await prisma.user.findFirst({ where: { id } });

    return property;
  } catch (error) {
    return null;
  }
};

export const getPropertyById = async (id: string) => {
  try {
    const property = await prisma.property.findFirst({ where: { id } });

    return property;
  } catch (error) {
    return null;
  }
};

export const createProperty = async (
  property: Property,
  userId: string
): Promise<Property | null> => {
  try {
    const newProperty = await prisma.property.create({
      data: { ...property, userId },
    });

    return newProperty;
  } catch (error) {
    throw new Error("An error has occurred tring to create a new property.");
  }
};

export const editProperty = async (
  property: Property,
  pid: string
): Promise<Property | null> => {
  try {
    const updatedProperty = await prisma.property.update({
      where: { id: pid },
      data: { ...property },
    });

    return updatedProperty;
  } catch (error) {
    throw new Error("An error has occurred tring to create a new property.");
  }
};
