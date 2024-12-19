import prisma from "@/lib/prisma";
import { Property } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

interface Segments {
  params: {
    id: string;
  };
}

const getProperty = async (id: string): Promise<Property | null> => {
  const findedProperty = await prisma.property.findFirst({
    where: {
      id,
    },
  });

  return findedProperty;
};

export async function GET(request: Request, { params }: Segments) {
  const { id } = params;
  const findedProperty = await getProperty(id);

  if (!findedProperty)
    return NextResponse.json(
      { message: `La propiedad con id: ${id} no existe` },
      { status: 404 }
    );

  return NextResponse.json({
    Property: findedProperty,
  });
}

const images = yup.string();

const putSchema = yup.object({
  title: yup.string().required(),
  address: yup.string().required(),
  description: yup.string().optional(),
  lat: yup.number().optional(),
  lng: yup.number().optional(),
  images: yup.array().of(images).optional(),
  type: yup.string().required(),
  status: yup.string().optional(),
  isActive: yup.boolean().optional(),
  price: yup.number().required(),
  area: yup.number().optional(),
  ownerId: yup.string().optional(),
});

// export async function PUT(request: Request, { params }: Segments) {
//   const { id } = params;
//   const findedProperty = await getProperty(id);

//   if (!findedProperty)
//     return NextResponse.json(
//       { message: `La propiedad con id: ${id} no existe` },
//       { status: 404 }
//     );

//   try {
//     const property = await putSchema.validate(
//       await request.json()
//     );

//     const updatedProperty = await prisma.property.update({
//       where: { id },
//       data: property,
//     });

//     return NextResponse.json({
//       updatedProperty,
//     });
//   } catch (error) {
//     NextResponse.json(error, { status: 400 });
//   }
// }
