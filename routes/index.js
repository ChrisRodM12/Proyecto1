const express = require('express');

const boletaRouter = require('./boleta.router');
const clienteRouter = require('./clientes.router');
const detalleboletaRouter = require('./detalleboleta.router');
const filaRouter = require('./filas.router');
const peliculaRouter = require('./peliculas.router');
const puestoRouter = require('./puestos.router');
const salaRouter = require('./salas.router');
const taquilleroRouter = require('./taquillero.router');

function router(ProyectoCine) { 
    const router = express.Router();
    ProyectoCine.use('/', router); 
    router.use('/peliculas', peliculaRouter);
    router.use('/clientes', clienteRouter);
    router.use('/boletas', boletaRouter);
    router.use('/detalleboletas', detalleboletaRouter);
    router.use('/filas', filaRouter);
    router.use('/puestos', puestoRouter);
    router.use('/salas', salaRouter);
    router.use('/taquilleros', taquilleroRouter);
    return router;
}

module.exports = router;
