import express from 'express';
import * as tipoVehiculoCtrl from '../controllers/tipo_vehiculo.controller';

const router = express.Router();

router.route('/')
    .get( (req, res) => {
        tipoVehiculoCtrl.findAll(req, res);
    });

export default router;
