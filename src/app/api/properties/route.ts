import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json(
      {
        message: "Take tiene que ser un Número",
      },
      { status: 400 }
    );
  }
  if (isNaN(skip)) {
    return NextResponse.json(
      {
        message: "Skip tiene que ser un Número",
      },
      { status: 400 }
    );
  }
  const properties = await prisma.property.findMany({ take, skip });

  return NextResponse.json({
    properties,
  });
}

const images = yup.string();

const postSchema = yup.object({
  title: yup.string().required(),
  address: yup.string().required(),
  description: yup.string(),
  lat: yup.number(),
  lng: yup.number(),
  images: yup.array().of(images),
  type: yup.string().required(),
  status: yup.string(),
  isActive: yup.boolean(),
  price: yup.number().required(),
  area: yup.number(),
  ownerId: yup.string(),
});

// export async function POST(request: Request) {
//   try {
//     const property = await postSchema.validate(await request.json());
//     const property = await prisma.property.create({
//       data: property,
//     });

//     return NextResponse.json(property);
//   } catch (error) {
//     return NextResponse.json(error, { status: 400 });
//   }
// }
