const express = require('express');
const router = express.Router();

var detalleBoleta = [{}]

router.post('/', (req, res) => {

  const body = req.body;
  detalleBoleta.push({
    id_detalle: req.body.id_detalle,
    id_venta: req.body.id_venta,
    id_pelicula: req.body.id_pelicula,
    importe: req.body.importe,
    fecha: req.body.fecha
  });
  res.json({
    message: 'Detalle de las ventas obtenidas',
    data: body.id
  })
})

router.get('/', (req, res) => {
  res.json(detalleBoleta)
})

router.patch('/:id', (req, res) => {

  const id = parseInt(req.params.id);
  const detalleBoletas = detalleBoleta.find(s => s.id === id);

  if (!detalleBoletas) {

  }

  const actualizacionBoleta = ['id_detalle', 'id_venta', 'id_pelicula', 'importe'];

  actualizacionBoleta.forEach(campo => {
    if (req.body[campo] !== undefined) {
      detalleBoletas[campo] = req.body[campo];
    }
  });

  res.json({
    message: 'El detalle de la boleta ha sido actualizado',
    data: detalleBoletas
  });
});

router.delete('/:id', (req, res) => {

  const id = parseInt(req.params.id);
  const detalleBoletaIndex = detalleBoleta.findIndex(detalle => detalle.id === id);

  if (salaIndex === -1) {
    return res.status(404).json({ message: 'Puesto no encontrado' });
  } else {
    const detalleBoletaEliminada = detalleBoleta.splice(detalleBoletaIndex, 1);

    res.json({
      message: 'Puesto eliminado',
      data: detalleBoletaEliminada
    });
  }


});

//Endpoint#1 Por medio del id_detalle, aparezca la fecha que se hizo el detalle
router.get('/:id_detalle', (req, res) => {
  const id_detalle = parseInt(req.params.id_detalle);
  const detalleBoleta = detalleBoleta.find(s => s.id_detalle === id_detalle);
  res.json(detalleBoleta)
});

//Endpoint#2 Por medio del id_venta me diga que importe tiene esa venta de la boleta
router.get('/:id_venta', (req, res) => {
  const id_venta = parseInt(req.params.id_venta);
  const detalleBoleta = detalleBoleta.find(s => s.id_venta === id_venta);
  res.json(detalleBoleta)
});

//Endpoint#3 por medio del id_detalle me diga cual es el id_pelicula y el importe
router.get('/:id_detalle/id_pelicula/importe', (req, res) => {
  const id_detalle = parseInt(req.params.id_detalle);
  const detalle = detalle.find(detalle => detalle.id_detalle === id_detalle)
  req.json({
    id_detalle: detalle.id_pelicula,
    precio: detalle.importe
  })
});

module.exports = router