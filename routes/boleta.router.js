const express = require('express');
const router = express.Router();

var boleta = [{}];

router.post('/', (req, res) => {

    const body = req.body;
    boleta.push({
        id: req.body.id,
        id_puesto: req.body.id_puesto,
        id_cliente: req.body.id_cliente,
        id_taquillero: req.body.id_taquillero,
        id_detalleboleta: req.body.id_detalleboleta,
    })
    res.json({
        message: 'boleta agregada',
        data: body.id


    })
})

router.get('/', (req, res) => {
    res.json(boleta);
})

router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const boletas = boleta.find(p => p.id === id);

    if (!boletas) {

    }

    const actualizacionboleta = ['id', 'id_puesto', 'id_cliente', 'id_taquillero', 'id_detalleboleta'];

    actualizacionboleta.forEach(campo => {
        if (req.body[campo] !== undefined) {
            boletas[campo] = req.body[campo];
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

//Endpoint#1 Mostrar por medio id de la venta nos diga quien fue el id_taquillero
router.get('/:id/id_taquillero', (req, res) => {
    const id = parseInt(req.params.id);
    const hallarVendedor = boleta.find(venta = venta.id == id)
    res.json(hallarVendedor.id_taquillero)
});

//Endpoint#2 Mostrar por medio de id_cliente cual es el puesto asignado
router.get('/:id/id_puesto', (req, res) => {
    const id = parseInt(req.params.id);
    const hallarPuesto = boleta.find(venta = venta.id == id)
    res.json(hallarPuesto.id_puesto)
});

module.exports = router