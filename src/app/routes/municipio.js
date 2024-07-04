// src/app/routes/municipio.js

const express = require('express');
const router = express.Router();
const db = require('../db'); // Importa tu configuración de conexión a la base de datos

// Ruta para obtener la cantidad de mascotas por municipio
router.get('/mascotas', async (req, res) => {
  try {
    const query = `
      SELECT m.fk_municipio_id, mu.nombre AS municipio, COUNT(*) AS cantidad_mascotas
      FROM mascotas m
      INNER JOIN municipios mu ON m.fk_municipio_id = mu.id
      GROUP BY m.fk_municipio_id, mu.nombre;
    `;
    const result = await db.query(query); // Ejecuta la consulta en tu base de datos
    res.json(result); // Devuelve los resultados como JSON
  } catch (error) {
    console.error('Error fetching mascotas por municipio:', error);
    res.status(500).json({ error: 'Error fetching mascotas por municipio' });
  }
});

module.exports = router;
