import React from "react";

const DocumentPage = () => {
  const apiEndpoints = [
    {
      number: 1,
      endpoint: "POST",
      uri: "localhost:3000/api/users",
      description: "Endpoint para registrar un Usuario en la base de datos",
      method: "POST",
      header: "Content-Type: JSON",
      users: "Admin",
      requestJSON: {
        name: "string/text",
        email: "string/text",
        password: "string/text",
      },
      response: {
        correct: {
          status: 200,
          body: {
            message: "Usuario registrado correctamente",
            data: [
              {
                fieldCount: 0,
                affectedRows: 1,
                insertId: 37,
                info: "",
                serverStatus: 2,
                warningStatus: 0,
                changedRows: 0,
              },
            ],
          },
        },
        incorrect: {
          status: 403,
          body: {
            message: "Error al registrar Usuario",
          },
        },
      },
    },
    {
      number: 2,
      endpoint: "/POST",
      uri: "localhost:3000/api/category",
      description: "Endpoint para registrar Categorias en la base de datos",
      method: "POST",
      users: "Admin",
      header: "Content-Type: JSON",
      response: {
        correct: {
          status: 200,
          body: [
            {
              name: "string/text",
            },
          ],
        },
        incorrect: {
          status: 404,
          body: {
            message: "No se encontraron Categorias",
          },
        },
      },
    },
    {
      number: 3,
      endpoint: "/POST",
      uri: "localhost:3000/api/gender",
      description: "Endpoint para registrar un Genero en la base de datos",
      method: "POST",
      users: "Admin",
      header: "Content-Type: JSON",
      response: {
        correct: {
          status: 200,
          body: {
            name: "string/text",
          },
        },
        incorrect: {
          status: 404,
          body: {
            message: "No se encontraron Generos",
          },
        },
      },
    },
    {
      number: 4,
      endpoint: "/POST",
      uri: "localhost:3000/api/raza",
      description: "Endpoint para registrar una Raza en la base de datos",
      method: "POST",
      users: "Admin",
      header: "Content-Type: JSON",
      requestJSON: {
        name: "string/text",
      },
      response: {
        correct: {
          status: 200,
          body: {
            message: "Raza registrada correctamente",
            Raza: [
              {
                fieldCount: 0,
                affectedRows: 1,
                insertId: 0,
                info: "Rows matched: 1 Changed: 1 Warnings: 0",
                serverStatus: 2,
                warningStatus: 0,
                changedRows: 1,
              },
              null,
            ],
          },
        },
        incorrect: {
          status: 403,
          body: {
            message: "Error al Registrar la Raza",
            error: {},
          },
        },
      },
    },
   
    {
      number: 5,
      endpoint: "/DELETE",
      uri: "http://localhost:3000/api/mascota/:id",
      description: "Endpoint para Eliminar una mascota por ID",
      method: "DELETE",
      users: "Admin",
      header: "Content-Type: JSON",
      response: {
        correct: {
          status: 200,
        },
        incorrect: {
          status: 404,
          body: {
            message: "No se encontro una Mascota con el ID ingresado",
          },
        },
      },
    },
    {
      number: 6,
      endpoint: "/POST",
      uri: "http://localhost:3000/api/mascota",
      description: "Endpoint para Registrar una mascota en la base de datos",
      method: "POST",
      users: "Admin",
      header: "Content-Type: FORM",
      response: {
        correct: {
          status: 200,
          body: {
            name: "string/text",
            race_id: "Int",
            category_id: "Int",
            photo: "archivo",
            gender_id: "Int",
          },
        },
        incorrect: {
          status: 404,
          body: {
            message: "No se pudo Registrar la Mascota",
          },
        },
      },
    },
    {
      number: 7,
      endpoint: "/PUT",
      uri: "http://localhost:3000/api/mascota/:id",
      description: "Endpoint para Actualizar una mascota en la base de datos",
      method: "PUT",
      users: "Admin",
      header: "Content-Type: JSON",
      response: {
        correct: {
          status: 200,
          body: {
            name: "string/text",
            race_id: "Int",
            category_id: "Int",
            photo: "archivo",
            gender_id: "Int",
          },
        },
        incorrect: {
          status: 404,
          body: {
            message: "No se pudo Actualizar la Mascota",
          },
        },
      },
    },
    {
      number: 8,
      endpoint: "/GET",
      uri: "http://localhost:3000/api/mascota",
      description: "Endpoint para Listar las Mascotas",
      method: "GET",
      users: "Admin",
      header: "Content-Type: JSON",
      response: {
        correct: {
          status: 200,
          correct: {
            name: "",
            race_id: "",
            category_id: "",
            photo: "",
            gender_id: "",
          },
        },
        incorrect: {
          status: 404,
          body: {
            message: "No se encontraron Mascotas",
          },
        },
      },
    },

    {
      number: 9,
      endpoint: "/GET",
      uri: "http://localhost:3000/api/mascota/:id",
      description: "Endpoint para Buscar La mascota por ID",
      method: "GET",
      users: "Admin",
      header: "Content-Type: JSON",
      response: {
        correct: {
          status: 200,
          Lista: {
            name: "",
            race_id: "",
            category_id: "",
            photo: "",
            gender_id: "",
          },
        },
        incorrect: {
          status: 404,
          body: {
            message: "No se encontro una Mascota con el ID ingresado",
          },
        },
      },
    },

    {
      number: 10,
      endpoint: "/POST",
      uri: "http://localhost:3000/auth/validator",
      description:
        "Endpoint para generar Token a un Usuario en la base de datos",
      method: "POST",
      users: "Admin",
      header: "Content-Type: JSON",
      response: {
        correct: {
          status: 200,
          body: {
            message: "Token Generado correctamente",
            email: "string/text",
            password: "string/text",
          },
        },
        incorrect: {
          status: 404,
          body: {
            message: "No se encontro el Usuario",
          },
        },
      },
    },
  ];
  

  return (
    <div className="container bg-gray-100 rounded-lg shadow-md">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Documentación</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Mascotas a tu Alcance
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-90% bg-white border border-gray-200 rounded-md shadow-md">
          <thead className="bg-blue-200">
            <tr className="text-left">
              <th className="py-3 px-6 font-bold text-gray-900">Número</th>
              <th className="py-3 px-6 font-bold text-gray-900">Petición</th>
              <th className="py-3 px-6 font-bold text-gray-900">Endpoint</th>
              <th className="py-3 px-6 font-bold text-gray-900">Descripción</th>
              <th className="py-3 px-6 font-bold text-gray-900">Verbo HTTP</th>
              <th className="py-3 px-6 font-bold text-gray-900">Header</th>
              <th className="py-3 px-6 font-bold text-gray-900">Usuarios</th>
              <th className="py-3 px-6 font-bold text-gray-900">JSON</th>
              <th className="py-3 px-6 font-bold text-gray-900">Mensaje</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {apiEndpoints.map((endpoint, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-blue-100" : "bg-gray-100"}
              >
                <td className="py-4 px-6">{endpoint.number}</td>
                <td className="py-4 px-6">{endpoint.endpoint}</td>
                <td className="py-4 px-6">{endpoint.uri}</td>
                <td className="py-4 px-6">{endpoint.description}</td>
                <td className="py-4 px-6">{endpoint.method}</td>
                <td className="py-4 px-6">{endpoint.header || "-"}</td>
                <td className="py-4 px-6">{endpoint.users}</td>
                <td className="py-4 px-6">
                  {endpoint.requestJSON ? (
                    <pre className="whitespace-pre-wrap">
                      {JSON.stringify(endpoint.requestJSON, null, 2)}
                    </pre>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="py-4 px-6">
                  <ul className="list-disc list-inside">
                    <li>
                      <span className="font-semibold text-gray-800">
                        Correcto:
                      </span>{" "}
                      <br />
                      status: {endpoint.response.correct.status} <br />
                      Body: <br />
                      {endpoint.response.correct.body && (
                        <pre className="whitespace-pre-wrap">
                          {JSON.stringify(
                            endpoint.response.correct.body,
                            null,
                            2
                          )}
                        </pre>
                      )}
                    </li>
                    <li>
                      <span className="font-semibold text-gray-800">
                        Incorrecto:
                      </span>{" "}
                      <br />
                      status: {endpoint.response.incorrect.status} <br />
                      Body: <br />
                      {endpoint.response.incorrect.body && (
                        <pre className="whitespace-pre-wrap">
                          {JSON.stringify(
                            endpoint.response.incorrect.body,
                            null,
                            2
                          )}
                        </pre>
                      )}
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentPage;