"use client"
import React, { useState, useEffect } from 'react'
import { IoBackspaceSharp  } from "react-icons/io5";
import axios from 'axios';
import Link from 'next/link';
import { FaCamera } from "react-icons/fa";
import { TiArrowUnsorted } from "react-icons/ti";
import { useRouter } from 'next/navigation';

const UpdatePet = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const [pet, setPet] = useState({
    name: "",
    race_id: "",
    category_id: "",
    gender_id: "",
    photo: ""
  });

  const [race, setRace] = useState([]);
  const [category, setCategory] = useState([]);
  const [gender, setGender] = useState([]);
  const [file, setFile] = useState(null);

  const fetchPet = async () => {
    try {
      const response = await axios.get(`/api/mascota/${id}`);
      setPet(response.data);
    } catch (error) {
      console.error('Error fetching pet:', error);
    }
  };

  const getRaces = async () => {
    try {
      const response = await axios.get('/api/raza');
      setRace(response.data);
    } catch (error) {
      console.error('Error fetching races:', error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get('/api/category');
      setCategory(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getGenders = async () => {
    try {
      const response = await axios.get('/api/gender');
      setGender(response.data);
    } catch (error) {
      console.error('Error fetching genders:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', pet.name);
      formData.append('race_id', pet.race_id);
      formData.append('category_id', pet.category_id);
      formData.append('photo', file ? file : pet.photo);
      formData.append('gender_id', pet.gender_id);

      const res = await axios.put(`/api/mascota/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (res.status === 200) {
        alert('Mascota actualizada');
        router.push('/mascotas');
      }
    } catch (error) {
      console.log(error);
      alert('Hubo un error al actualizar la mascota');
    }
  };

  useEffect(() => {
    fetchPet();
    getRaces();
    getCategories();
    getGenders();
  }, []);

  return (
    <div className='w-full h-screen flex justify-center items-center bg-blue-200'>
      <div className='bg-blue-800 w-[360px] h-[640px] flex flex-col justify-between rounded-3xl px-5'>
        <div className='w-full flex items-center pt-8'>
          <h1 className='text-white text-[1.2em] w-full'>Modificar Mascota</h1>
          <Link href="/mascotas" className='hover:bg-blue-700 flex items-center justify-center h-[40px] w-[40px] rounded-full text-white text-3xl'><IoBackspaceSharp /></Link>
        </div>
        <div className='w-full flex justify-center mb-[15%]'>
          {file ?
            <img className='h-[110px] w-[110px] rounded-full border-4 border-blue-400' src={URL.createObjectURL(file)} />
            :
            <img className='h-[110px] w-[110px] rounded-full border-4 border-blue-400' 
              src={pet.photo} 
              alt={`${pet.name}`}
            />
          }
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <input type="text" placeholder='Nombre' name='name' value={pet.name} onChange={handleChange} className='px-4 py-[12px] rounded-[50px] bg-white bg-opacity-60 placeholder-gray-500 outline-none' />
          <div className='relative'>
            <select className='appearance-none px-4 py-[14px] rounded-[50px] bg-white bg-opacity-60 outline-none w-full' name='race_id' value={pet.race_id} onChange={handleChange} >
              <option value="" disabled className='text-black p-2'>Seleccione Raza...</option>
              {race.map(rac => (
                <option value={rac.id} key={rac.id} className='text-black p-2'>{rac.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
              <TiArrowUnsorted />
            </div>
          </div>
          <div className='relative'>
            <select name='category_id' value={pet.category_id} onChange={handleChange} className='appearance-none px-4 py-[14px] rounded-[50px] bg-white bg-opacity-60 outline-none w-full'>
              <option value="" disabled className='text-black p-2'>Seleccione Categoria...</option>
              {category.map(categor => (
                <option value={categor.id} key={categor.id} className='text-black p-2'>{categor.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
              <TiArrowUnsorted />
            </div>
          </div>
          <div className='relative'>
            <input type="file" className='absolute inset-0 w-full h-full opacity-0 cursor-pointer' name='photo' onChange={(e) => setFile(e.target.files[0])} />
            <button type="button" className='w-full flex justify-between items-center px-4 py-[12px] rounded-[50px] bg-white bg-opacity-60 placeholder-gray-500 outline-none'>
              {file ? file.name : pet.photo}
              <FaCamera />
            </button>
          </div>
          <div className='relative'>
            <select name="gender_id" value={pet.gender_id} onChange={handleChange} className='appearance-none px-4 py-[14px] rounded-[50px] bg-white bg-opacity-60 outline-none w-full'>
              <option value="" disabled className='text-black p-2'>Seleccione Genero...</option>
              {gender.map(gend => (
                <option value={gend.id} key={gend.id} className='text-black p-2'>{gend.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
              <TiArrowUnsorted />
            </div>
          </div>
          <button className='bg-green-600 hover:bg-green-700 py-[10px] rounded-full text-white text-[1em] mb-4'>Actualizar</button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePet;
