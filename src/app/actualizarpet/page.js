import React from 'react'
import { IoBackspaceSharp  } from "react-icons/io5";

function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-blue-200'>
      <div className='bg-blue-800 w-[360px] h-[640px] flex flex-col justify-between rounded-3xl px-5'>
          <div className='w-full flex items-center pt-8'>
            <h1 className='text-white text-[1.2em] w-full'>Modificar Mascota</h1>
            <button className='hover:bg-blue-700 flex items-center justify-center h-[40px] w-[40px] rounded-full text-white text-3xl'><IoBackspaceSharp/></button>
          </div>
          <div className='w-full flex justify-center'>
            <div className='bg-white h-[110px] w-[110px] flex justify-center items-center text-[20px] rounded-full border-4 text-blue-400 border-blue-400'>
              Foto
            </div>
          </div>
          <div className='flex flex-col gap-3'>
              <input type="text" placeholder='Nombre' className='px-4 py-[12px] rounded-[50px] bg-white bg-opacity-60 placeholder-gray-500 outline-none'/>
              <select  className='px-4 py-[14px] rounded-[50px] bg-white bg-opacity-60 outline-none' >
                <option className='text-gray-500 p-2'>Seleccione Raza...</option>
                <option className='text-black p-2'>Labrador</option>
              </select>
              <select  className='px-4 py-[14px] rounded-[50px] bg-white bg-opacity-60 outline-none' >
                <option className='text-gray-500 p-2'>Seleccione Categoria...</option>
                <option className='text-black p-2'>cate</option>
              </select>
              <input type="text" placeholder='Cambiar Foto' className='px-4 py-[12px] rounded-[50px] bg-white bg-opacity-60 placeholder-gray-500 outline-none'/>
              <select  className='px-4 py-[14px] rounded-[50px] bg-white bg-opacity-60 outline-none' >
                <option className='text-gray-500 p-2'>Seleccione Genero...</option>
                <option className='text-black p-2'>Masculino</option>
                <option className='text-black p-2'>Femenino</option>
              </select>
              <button className='bg-green-600 hover:bg-green-700 py-[10px] rounded-full text-white text-[1em] mb-4'>Actualizar</button>
          </div>
      </div>
    </div>
  )
}

export default page