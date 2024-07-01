const express = require('express');
const router = express.Router();

var cliente = [{}];

router.get('/', (req, res) => {
    res.json(cliente)
})

router.post('/', (req, res) => {

    const body = req.body;
    cliente.push({
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.sipnosis,
        edad: req.body.clasificacion,
        telefono: req.body.genero,
        correo: req.body.idioma
    })
    res.json({
        message: 'Cliente agregado',
        data: body.id
    })
})

router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const cliente = cliente.find(p => p.id === id);

    if (!cliente) {

    }

    const actualizacionCliente = ['nombre', 'apellido', 'edad', 'telefono', 'correo'];

    actualizacionCliente.forEach(campo => {
        if (req.body[campo] !== undefined) {
            cliente[campo] = req.body[campo];
        }
    });

    res.json({
        message: 'cliente actualizado',
        data: pelicula
    });
});

router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const ClienteIndex = cliente.findIndex(p => p.id === id);

    if (ClienteIndex === -1) {
        return res.status(404).json({ message: 'Película no encontrada' });
    } else {
        const clienteliminado = cliente.splice(ClienteIndex, 1);

        res.json({
            message: 'cliente eliminado',
            data: clienteliminado
        });
    }
});

module.exports = router