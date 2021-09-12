import express from 'express';
import * as municipioCtrl from '../controllers/municipio.controller';

const router = express.Router();

router.route('/')
    .get( (req, res) => {
        municipioCtrl.findAll(req, res);
    });

export default router;
