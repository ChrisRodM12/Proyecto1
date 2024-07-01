const express = require('express');
const router = express.Router();

var boleta = [{}];

router.get('/', (req, res) => {
    res.json(boleta);
})

router.post('/', (req, res) => {

    const body = req.body;
    boleta.push({
        id: req.body.id,
        id_pelicula: req.body.id_pelicula,
        id_puesto: req.body.id_puesto,
        id_cliente: req.body.id_cliente,
        id_taquillero: req.body.id_taquillero,
        id_detalleboleta: req.body.id_detalleboleta,
        precio: req.body.precio
    })
    res.json({
        message: 'boleta agregada',
        data: body.id


    })
})

router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const boleta = boleta.find(p => p.id === id);

    if (!boleta) {

    }

    const actualizacionboleta = ['id', 'id_pelicula', 'id_puesto', 'id_cliente', 'id_taquillero', 'id_detalleboleta', 'precio'];

    actualizacionboleta.forEach(campo => {
        if (req.body[campo] !== undefined) {
            boleta[campo] = req.body[campo];
        }
    });

    res.json({
        message: 'boleta actualizada',
        data: boleta
    });
});

router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const boletaIndex = boleta.findIndex(p => p.id === id);

    if (boletaIndex === -1) {
        return res.status(404).json({ message: 'Boleta no encontrada' });
    } else {
        const boletaEliminada = boleta.splice(boletaIndex, 1);

        res.json({
            message: 'Película eliminada',
            data: boletaEliminada
        });
    }
});

module.exports = router