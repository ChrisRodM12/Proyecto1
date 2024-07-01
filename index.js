const express = require('express');
const router = require('./routes')
const ProyectoCine = express();
const port = 3000;
ProyectoCine.use(express.json());

router(ProyectoCine);

ProyectoCine.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
})

