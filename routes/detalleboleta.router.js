const express = require('express');
const router = express.Router();

var detalleBoleta = [{}]

router.get('/',(req,res)=>{
    res.json(detalleBoleta)
})

router.post('/',(req,res)=>{

    const body = req.body;
    detalleBoleta.push({
        id_detalle: req.body.id_detalle,
        id_venta: req.body.id_venta,
        id_pelicula: req.body.id_pelicula,
        importe: req.body.importe
    });
    res.json({
        message: 'Detalle de las ventas obtenidas',
        data: body.id
    })
})

router.patch('/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const detalleBoleta = detalleBoleta.find(s => s.id === id);
    
    if (!detalleBoleta) {
      
    }
    
    const actualizacionBoleta = ['id_detalle', 'id_venta', 'id_pelicula', 'importe'];
    
    actualizacionBoleta.forEach(campo => {
      if (req.body[campo] !== undefined) {
        detalleBoleta[campo] = req.body[campo];
      }
    });
    
    res.json({
      message: 'El detalle de la boleta ha sido actualizado',
      data: detalleBoleta
    });
});

router.delete('/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const detalleBoletaIndex = detalleBoleta.findIndex(detalle => detalle.id === id);
    
    if (salaIndex === -1) {
      return res.status(404).json({ message: 'Puesto no encontrado'});
    }else{
      const detalleVentaEliminada = detalleVenta.splice(detalleBoletaIndex, 1);
    
    res.json({
      message: 'Puesto eliminado',
      data: detalleBoletaIndex
    });
 } 
    

});

module.exports = router