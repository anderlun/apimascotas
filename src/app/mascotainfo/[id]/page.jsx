"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoBackspaceSharp } from "react-icons/io5";

function page({ params }) {
  const id = params.id;

  const [pet, setPet] = useState({});

  const buscarpet = async () => {
    const response = await axios.get(`/api/mascota/${id}`);
    setPet(response.data);
  };
  useEffect(() => {
    buscarpet();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-200">
      <div className="bg-blue-800 w-[360px] h-[640px] flex flex-col rounded-3xl px-5">
        <div className="w-full flex items-center pt-8">
          <h1 className="text-white text-[1.2em] w-full">
            Informacion de la Mascota
          </h1>
          <Link
            href="/mascotas"
            className="hover:bg-blue-700 flex items-center justify-center h-[40px] w-[40px] rounded-full text-white text-3xl"
          >
            <IoBackspaceSharp />
          </Link>
        </div>
        <div className="w-full flex justify-center my-20 relative">
          <div className="bg-white h-[110px] w-[110px] flex justify-center items-center rounded-full text-blue-400 border-blue-400 relative">
            <img
              src={`/img/${pet.photo}`}
              alt=""
              className=" bg-yellow-400 rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex">
            <p className="h-[40px] p-2 bg-blue-500 text-white w-[150px] rounded-tl-lg rounded-bl-lg">
              Nombre
            </p>
            <p className="h-[40px] p-2 bg-blue-200 w-[100%] rounded-tr-lg rounded-br-lg">
              {pet.name}
            </p>
          </div>
          <div className="flex">
            <p className="h-[40px] p-2 bg-blue-500 text-white w-[150px] rounded-tl-lg rounded-bl-lg">
              Raza
            </p>
            <p className="h-[40px] p-2 bg-blue-200 w-[100%] rounded-tr-lg rounded-br-lg">
              {pet.fk_race && pet.fk_race.name}
            </p>
          </div>
          <div className="flex">
            <p className="h-[40px] p-2 bg-blue-500 text-white w-[150px] rounded-tl-lg rounded-bl-lg">
              Categoria
            </p>
            <p className="h-[40px] p-2 bg-blue-200 w-[100%] rounded-tr-lg rounded-br-lg">
              {pet.fk_category && pet.fk_category.name}
            </p>
          </div>
          <div className="flex">
            <p className="h-[40px] p-2 bg-blue-500 text-white w-[150px] rounded-tl-lg rounded-bl-lg">
              Genero
            </p>
            <p className="h-[40px] p-2 bg-blue-200 w-[100%] rounded-tr-lg rounded-br-lg">
              {pet.fk_gender && pet.fk_gender.name}
            </p>

            <div className="flex">
              <p className="h-[40px] p-2 bg-blue-500 text-white w-[150px] rounded-tl-lg rounded-bl-lg">
                Municipio
              </p>
              <p className="h-[40px] p-2 bg-blue-200 w-[100%] rounded-tr-lg rounded-br-lg">
                {pet.fk_municipio && pet.fk_municipio.name} {/* Asumiendo que el nombre del municipio está en fk_municipio.name */}
              </p>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
