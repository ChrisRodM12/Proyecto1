const express = require('express');
const router  = express.Router();

var taquillero = [{}];

router.get('/', (req, res) => {
    res.json(taquillero)
})

router.post('/', (req, res) => {

    const body = req.body;
    taquillero.push({
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
    })
    res.json({
        message: 'Taquillero agregado',
        data: body.taquillero
    })
})

router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const taquilleros = taquillero.find(p => p.id === id);

    if (!taquilleros) {

    }

    const actualizaciontaquillero = ['id', 'nombre', 'apellido', 'usuario'];

    actualizaciontaquillero.forEach(campo => {
        if (req.body[campo] !== undefined) {
            taquilleros[campo] = req.body[campo];
        }
    });

    res.json({
        message: 'taquillero actualizado',
        data: taquilleros
    });
});

router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const taquilleroIndex = taquillero.findIndex(p => p.id === id);

    if (taquilleroIndex === -1) {
        return res.status(404).json({ message: 'taquillero no encontrada' });
    } else {
        const taquilleroliminado = taquillero.splice(taquilleroIndex, 1);

        res.json({
            message: 'taquillero eliminado',
            data: taquilleroliminado
        });
    }
});

module.exports = router