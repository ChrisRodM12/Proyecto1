const express = require('express');
const router = express.Router();

var cliente = [{}];

router.post('/', (req, res) => {

    const body = req.body;
    cliente.push({
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        telefono: req.body.telefono,
        correo: req.body.correo
    })
    res.json({
        message: 'Cliente agregado',
        data: body.id
    })
})

router.get('/', (req, res) => {
    res.json(cliente)
})


router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const clientes = cliente.find(p => p.id === id);

    if (!clientes) {

    }

    const actualizacionCliente = ['nombre', 'apellido', 'edad', 'telefono', 'correo'];

    actualizacionCliente.forEach(campo => {
        if (req.body[campo] !== undefined) {
            clientes[campo] = req.body[campo];
        }
    });

    res.json({
        message: 'cliente actualizado',
        data: clientes
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