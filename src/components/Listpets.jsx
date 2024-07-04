"use client";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { FaPencilAlt } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";

function Listpets() {
  const [pets, setPets] = useState([]);
  const [municipiosData, setMunicipiosData] = useState([]);

  const fetchPetsAndMunicipiosData = async () => {
    try {
      const responsePets = await axios.get("/api/mascota");
      setPets(responsePets.data);

      const responseMunicipios = await axios.get("/api/municipios/mascotas");
      setMunicipiosData(responseMunicipios.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const eliminarPet = async (id) => {
    const response = await axios.delete(`/api/mascota/${id}`);
    if (response) {
      alert("Mascota eliminada");
      fetchPetsAndMunicipiosData();
    }
  };

  useEffect(() => {
    fetchPetsAndMunicipiosData();
  }, []);

  return (
    <div className="overflow-auto mt-3 h-[80%]">
      <div className="w-[325px] h-[auto] pl-5 rounded-lg font-semibold bg-white">
        <p className="text-bold text-blue-500">Municipios y cantidad de mascotas:</p>
        <ul>
          {municipiosData.map((municipio, index) => (
            <li key={index}>
              {municipio.municipio}: {municipio.cantidad_mascotas}
            </li>
          ))}
        </ul>
      </div>

      {pets.map((pet) => (
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
              <p className="text-[0.8em]">{pet.race_id}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/mascotainfo/${pet.id}`}
              className="h-[35px] w-[35px] flex justify-center items-center rounded-full bg-blue-700 hover:bg-blue-600 text-white text-xl"
            >
              <ImSearch />
            </Link>
            <Link
              href={`/actualizarpet/${pet.id}`}
              className="h-[35px] w-[35px] flex justify-center items-center rounded-full bg-blue-700 hover:bg-blue-600 text-white text-xl"
            >
              <FaPencilAlt />
            </Link>
            <button
              onClick={() => {
                eliminarPet(pet.id);
              }}
              className="h-[35px] w-[35px] flex justify-center items-center rounded-full bg-red-600 hover:bg-red-500 text-white text-xl"
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listpets;
