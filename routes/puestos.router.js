const express = require('express');
const router = express.Router();

var puesto = [{}]

router.get('/', (req, res) => {
    res.json(puesto)
})

router.post('/', (req, res) => {
    const body = req.body;
    puesto.push({
        id: req.body.id,
        id_fila: req.body.id_fila,
        numeropuesto: req.body.numeropuesto
    })
    res.json({
        message: 'Puesto Creado',
        data: body.id
    })
})

router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const puesto = puesto.find(s => s.id === id);

    if (!puesto) {

    }

    const actualizacionPuesto = ['id', 'id_fila', 'numeropuesto'];

    actualizacionPuesto.forEach(campo => {
        if (req.body[campo] !== undefined) {
            puesto[campo] = req.body[campo];
        }
    });

    res.json({
        message: 'Puesto actualizado',
        data: puesto
    });
});

router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const puestoIndex = puesto.findIndex(s => s.id === id);

    if (puestoIndex === -1) {
        return res.status(404).json({ message: 'Puesto no encontrado' });
    } else {
        const puestoEliminado = puesto.splice(puestoIndex, 1);

        res.json({
            message: 'Puesto eliminado',
            data: puestoIndex
        });
    }

});

/* router.put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const puesto = puesto.find(item => item.id === id)
    puesto.id = body.id
    puesto.id_fila = body.id_fila
    puesto.numeropuesto = body.numeropuesto
    res.json({
        message: 'Puesto Actualizado',
        data: body.id
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const puesto = puesto.find(item => item.id === id)
    puesto.splice(puesto, 1)
    res.json({
        message: 'Puesto Eliminado',
    })
}) */

module.exports = router;