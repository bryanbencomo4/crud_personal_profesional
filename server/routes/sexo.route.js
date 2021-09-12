import express from 'express';
import * as sexoCtrl from '../controllers/sexo.controller';

const router = express.Router();

router.route('/')
    .get( (req, res) => {
        sexoCtrl.findAll(req, res);
    });

export default router;
