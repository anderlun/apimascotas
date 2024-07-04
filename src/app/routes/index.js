// src/app/routes/index.js

const express = require('express');
const router = express.Router();

const municipioRouter = require('./municipio');

// Rutas relacionadas con municipios
router.use('/api/municipios', municipioRouter);

module.exports = router;
