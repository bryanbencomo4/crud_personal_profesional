import express from 'express';
import * as marcaVehiculoCtrl from '../controllers/marca_vehiculo.controller';

const router = express.Router();

router.route('/')
    .get( (req, res) => {
        marcaVehiculoCtrl.findAll(req, res);
    });

export default router;
