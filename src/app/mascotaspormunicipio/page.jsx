// api/mostrarmascotapormunicipio/page.jsx

"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Page() {
  const [municipios, setMunicipios] = useState([
    { id: 1, name: "Pitalito" },
    { id: 2, name: "Plata" },
  ]);
  const [petsByMunicipio, setPetsByMunicipio] = useState([]);

  useEffect(() => {
    const fetchPetsByMunicipality = async () => {
      try {
        const response = await axios.get("/api/mascota"); // Ajusta la ruta según tu estructura de API
        const allPets = response.data; // Obtienes todas las mascotas desde la API

        // Agrupar mascotas por municipio
        const petsGroupedByMunicipio = {};

        allPets.forEach((pet) => {
          const municipioId = pet.municipio_id;

          if (!petsGroupedByMunicipio[municipioId]) {
            petsGroupedByMunicipio[municipioId] = {
              municipioId,
              municipioName: municipios.find((m) => m.id === municipioId)?.name,
              count: 0,
              pets: [],
            };
          }

          petsGroupedByMunicipio[municipioId].count++;
          petsGroupedByMunicipio[municipioId].pets.push(pet);
        });

        // Convertir el objeto a un array de municipios con mascotas
        const petsByMunicipalityArray = Object.values(petsGroupedByMunicipio);

        setPetsByMunicipio(petsByMunicipalityArray);
      } catch (error) {
        console.error("Error fetching pets by municipality:", error);
      }
    };

    fetchPetsByMunicipality();
  }, [municipios]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-200">
      <div className="w-[400px] h-[90%] bg-blue-800 p-6 rounded-[25px]">
        <div className="flex flex-col items-end">
          <div className="flex items-center w-full h-[auto] mb-5">
            <p className="w-full flex justify-center font-bold text-2xl text-white">
              Lista de Mascotas por Municipio
            </p>
          </div>
          <div className="overflow-auto mt-3 h-[80%]">
            {petsByMunicipio.map((municipioPets) => (
              <div key={municipioPets.municipioId} className="mb-4">
                <p className="font-bold text-lg mb-2">
                  {municipioPets.municipioName}
                </p>
                <p>Cantidad de Mascotas: {municipioPets.count}</p>
                <div className="flex flex-wrap">
                  {municipioPets.pets.map((pet) => (
                    <div
                      key={pet.id}
                      className="mr-2 flex justify-between items-center bg-gray-200 hover:bg-gray-300 p-4 my-3 rounded-xl"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          className="h-[65px] w-[65px] bg-yellow-400 rounded-full"
                          src={`/img/${pet.photo}`}
                          alt="Foto perro"
                        />
                        <div>
                          <p className="font-bold">{pet.name}</p>
                        </div>
                      </div>
                      {/* Aquí podrías agregar más detalles o acciones si lo deseas */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
