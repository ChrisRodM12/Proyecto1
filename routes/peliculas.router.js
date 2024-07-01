const express = require('express');
const router = express.Router();

var peliculas = [];

router.get('/', (req, res) => {
    res.json(peliculas);
})

router.post('/', (req, res) => {
    const body = req.body;
    peliculas.push({
        id: req.body.id,
        titulo: req.body.titulo,
        genero: req.body.genero,
        duracion: req.body.duracion,
        clasificacion: req.body.clasificacion,
        director: req.body.director
    })
    res.json({
        message: 'Pelicula almacenada'
    });
});

router.get('/', (req, res) => {
    const id = req.params.id;
    const pelicula = peliculas.find(pelicula => pelicula.id == id);
    res.json(pelicula);
});

/* router.patch('/', (req,res)=>{
    const {id} = req.params.id;
    const body = req.body;
    peliculas = peliculas.find(peliculas => peliculas.id == id);
    if (body.name != null) {
        peliculas.titulo = body.titulo;
    }
    if (body.genero != null) {
    peliculas.genero = body.genero;
    }
    if (body.duracion != null) {
    peliculas.duracion = body.duracion;
    }
    if (body.clasificacion != null) {
    peliculas.clasificacion = body.clasificacion;
    }
    if (body.director != null) {
    peliculas.director = body.director;
    }
    res.json({message: 'Pelicula actualizada'});
}) */

router.delete('/:id', (req, res) => {
    const { id } = req.params.id;
    const index = peliculas.findIndex(pelicula => pelicula.id == id);
    peliculas.splice(index, 1);
    res.json({ message: 'Pelicula eliminada' });
})

//Endpoint#1
router.get('/:titulo/clasificacion', (req, res) => {
    const titulo = req.params.titulo;
    const hallarId = peliculas.find(peliculas => peliculas.titulo == titulo)
    res.json({
        clasificacion: hallarId.clasificacion
    });
})
//Endpoint#2
router.get('/:clasificacion', (req, res) => {
    const clasificacion = req.params.clasificacion;
    const hallarClasificacion = peliculas.find(peliculas => peliculas.clasificacion == clasificacion)
    res.json(hallarClasificacion.nombre);
})
//Endpoint#3
router.get('/:duracion', (req, res) => {
    const director = req.params.director;
    const hallarId = peliculas.find(peliculas => peliculas.director == director)
    res.json({
        duracion: hallarId.duracion
    });
})
//Endpoint#4
router.get('/:genero/clasificacion', (req, res) => {
    const genero = req.params.genero;
    const hallarId = peliculas.find(peliculas => peliculas.genero == genero)
    res.json({
        clasificacion: hallarId.clasificacion
    });
})
//Endpoint#5
router.get('/:clasificacion/duracion', (req, res) => {
    const clasificacion = req.params.clasificacion;
    const hallarId = peliculas.find(peliculas => peliculas.clasificacion == clasificacion)
    res.json({
        duracion: hallarId.duracion
    });
})

module.exports = router;