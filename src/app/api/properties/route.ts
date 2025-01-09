import { getUserSessionServer } from "@/auth/actions/auth-actions";
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

const images = yup.string().default("");

const postSchema = yup.object({
  title: yup.string().required(),
  address: yup.string().required(),
  description: yup.string().default(""),
  lat: yup.number().default(0),
  lng: yup.number().default(0),
  images: yup.array().of(images),
  type: yup.string().required(),
  status: yup.string().required(),
  isActive: yup.boolean().default(false),
  price: yup.number().required(),
  area: yup.number().default(0),
  beds: yup.number().default(0),
  baths: yup.number().default(0),
});

export async function POST(request: Request) {
  const user = await getUserSessionServer();

  if (!user) return NextResponse.json("No autorizado", { status: 401 });

  try {
    const { ...property } = await postSchema.validate(await request.json());
    const createdProperty = await prisma.property.create({
      data: { ...property, userId: user.id },
    });
    
    return NextResponse.json(createdProperty);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}