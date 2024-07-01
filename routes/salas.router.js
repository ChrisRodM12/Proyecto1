const express = require('express');
const router = express.Router();

var sala = [{}];

router.get('/', (req, res) => {
    res.json(sala)
})

router.post('/', (req, res) => {
    const body = req.body;
    sala.push({
        id: req.body.id,
        id_pelicula: req.body.id_pelicula,
        nombresala: req.body.nombresala,
        capacidad: req.body.capacidad
    })
    res.json({
        message: 'Sala Creada',
        data: body.id
    })
})

router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const sala = sala.findIndex(s => s.id === id);

    if (!sala) {

    }

    const actualizacionSala = ['id', 'id_pelicula', 'nombresala', 'capacidad'];

    actualizacionSala.forEach(campo => {
        if (req.body[campo] !== undefined) {
            sala[campo] = req.body[campo];
        }
    });

    res.json({
        message: 'Sala actualizada',
        data: sala
    });
})

router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const salaIndex = sala.findIndex(s => s.id === id);

    if (salaIndex === -1) {
        return res.status(404).json({ message: 'Sala no encontrada' });
    } else {
        const salaEliminada = sala.splice(salaIndex, 1);
        res.json({
            message: 'Sala eliminada',
            data: salaIndex
        });
    }
})

module.exports = router