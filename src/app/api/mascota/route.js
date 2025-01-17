import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

export async function GET() {
  const response = await prisma.pets.findMany({
    include: {
      fk_race: true,
      fk_category: true,
      fk_gender: true,
    
    },
  });

  if (response.length > 0) {
    return new Response(JSON.stringify(response), {
      headers: { "Content-type": "application/json" },
      status: 200,
    });
  } else {
    return NextResponse.json(
      {
        message: "No se encontraron mascotas",
      },
      {
        status: 404,
      }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.formData();
    const photofile = data.get("photo");

    const bytes = await photofile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(process.cwd(), "public/img", photofile.name);
    await writeFile(filePath, buffer);

    const newPet = await prisma.pets.create({
      data: {
        name: data.get("name"),
        race_id: parseInt(data.get("race_id")),
        category_id: parseInt(data.get("category_id")),
        photo: photofile.name,
        gender_id: parseInt(data.get("gender_id")),
        municipio_id: parseInt(data.get("municipio_id")),
      },
    });
    return NextResponse.json(
      {
        message: "Mascota registrada",
        newPet,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
