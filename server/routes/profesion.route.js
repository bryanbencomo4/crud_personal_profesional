import express from 'express';
import * as profesionCtrl from '../controllers/profesion.controller';

const router = express.Router();

router.route('/')
    .get( (req, res) => {
        profesionCtrl.findAll(req, res);
    });

export default router;
