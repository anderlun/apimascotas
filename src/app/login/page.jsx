"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import "../globals.css";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      alert(res.error);
    } else {
      router.push("/mascotas");
    }
  });

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-200">
      <div className="container-login w-[360px] h-[640px] flex flex-col justify-end rounded-[30px] p-3">
        <div className="flex flex-col gap-3">
          <form onSubmit={onSubmit}>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email es requerido",
                },
              })}
              type="email"
              placeholder="Correo electronico"
              className="w-[100%] px-4 py-[10px] rounded-[50px] bg-white bg-opacity-60 placeholder-blue-400 outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-xs pl-4">
                {errors.email.message}
              </span>
            )}
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Contraseña es requerida",
                },
              })}
              type="password"
              placeholder="Contraseña"
              className="w-[100%] my-3 px-4 py-[10px] rounded-[50px] bg-white bg-opacity-60 placeholder-blue-400 outline-none"
            />
            {errors.password && (
              <span className="text-red-500 text-xs pl-4">
                {errors.password.message}
              </span>
            )}
            <button className="bg-blue-800 hover:bg-blue-700 py-[10px] w-full rounded-full text-white text-[1em]">
              Ingresar
            </button>
          </form>
          <Link href="/users">
            <button className="bg-blue-800 hover:bg-blue-700 py-[10px] w-full rounded-full text-white text-[1em]">
              Registrar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
