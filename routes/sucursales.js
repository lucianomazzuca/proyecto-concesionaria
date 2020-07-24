const express = require('express');
const router = express.Router();

const sucursalesController = require('../controller/sucursalesController');

router.get('/', sucursalesController.sucursalesDatos);
router.get('/:sucursal', sucursalesController.sucursalDatos);


module.exports = router;