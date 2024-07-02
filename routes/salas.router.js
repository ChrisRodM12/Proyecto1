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
        data: body.sala
    })
})

router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const salas = sala.findIndex(s => s.id === id);

    if (!salas) {

    }

    const actualizacionSala = ['id', 'id_pelicula', 'nombresala', 'capacidad'];

    actualizacionSala.forEach(campo => {
        if (req.body[campo] !== undefined) {
            salas[campo] = req.body[campo];
        }
    });

    res.json({
        message: 'Sala actualizada',
        data: salas
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
            data: salaEliminada
        });
    }
})

//Endpoint#1 apartir de id_pelicula cual es el nombresala
router.get('/:id_pelicula', (req, res) => {
    const id_pelicula = parseInt(req.params.id_pelicula);
    const sala = sala.filter(s => s.id_pelicula === id_pelicula);
    res.json({
        message: 'Sala encontrada',
        data: sala
    });
})

//Endpoint#2 apartir de capacidad cual es el id_pelicula de la sala
router.get('/:capacidad/id_pelicula', (req, res) => {
    const capacidad = parseInt(req.params.capacidad);
    const hallarid_pelicula = sala.find(s => s.capacidad === capacidad);
    if (!hallarid_pelicula) {
        return res.status(404).json({ message: 'Sala no encontrada' });
    } else {
        res.json({
            message: 'Sala encontrada',
            data: hallarid_pelicula
        });
    }
})

module.exports = router