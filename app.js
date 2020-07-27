const express = require('express');
const app = express();

//rutas
const rutaHome = require('./routes/home');
const rutaAutos = require('./routes/autos');
const rutaMarcas = require('./routes/marcas');
const rutaSucursales = require('./routes/sucursales');

app.use('/', rutaHome);
app.use('/sucursales', rutaSucursales);
app.use('/autos', rutaAutos);
app.use('/marcas', rutaMarcas);

app.listen(3030, () => console.log("El servidor esta corriendo en el puerto 3030"));