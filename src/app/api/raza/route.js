import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const res = await prisma.races.findMany();
  if (res.length > 0) {
    return new Response(JSON.stringify(res), {
      headers: { "Content-type": "application/json" },
      status: 200,
    });
  } else {
    return NextResponse.json(
      {
        message: "No se encontraron razas",
      },
      {
        status: 404,
      }
    );
  }
}

export async function POST(request) {
  const { name } = await request.json();
  const newGender = await prisma.races.create({
    data: {
      name,
    },
  });
  return NextResponse.json(
    {
      message: "La raza se registró con exito",
      newGender,
    },
    {
      status: 200,
    }
  );
}
