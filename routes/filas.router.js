const express = require('express');
const router = express.Router();

var fila = [{}]

router.get('/', (req, res) => {
    res.json(fila)
})

router.post('/', (req, res) => {
    
    const body = req.body;
    fila.push({
        id: req.body.id,
        id_Sala: req.body.id,
        letraFila: req.body.letraFila,
        cantidadePuestos: req.body.cantidadePuestos,
    })
    res.json({
        message: 'Fila Creada',
        data: body.id
    })
})

router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const fila = fila.find(s => s.id === id);

    if (!fila) {

    }

    const actualizacionFila = ['id', 'id_Sala', 'letraFila', 'cantidadePuestos'];

    actualizacionFila.forEach(campo => {
        if (req.body[campo] !== undefined) {
            fila[campo] = req.body[campo];
        }
    });

    res.json({
        message: 'Fila actualizada',
        data: fila
    });
});

router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const filaIndex = fila.findIndex(f => f.id === id);

    if (filaIndex === -1) {
        return res.status(404).json({ message: 'Sala no encontrada' });
    } else {
        const filaEliminada = filas.splice(filaIndex, 1);

        res.json({
            message: 'Fila eliminada',
            data: filaIndex
        });
    }
});

module.exports = router
