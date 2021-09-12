import express from 'express';
import * as profesionalCtrl from '../controllers/profesional.controller';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

const router = express.Router();

router.route('/')
    .post(validate(schema.storeProfesional), (req, res) => {
        console.log(req.body);

        profesionalCtrl.store(req, res);
    })
    .get( (req, res) => {
        profesionalCtrl.findAll(req, res);
    });


router.route('/:id')
    .get( (req, res) => {
        profesionalCtrl.findById(req, res);
    })
    .put((req, res) => {
        profesionalCtrl.update(req, res);
    })
    .delete((req, res) => {
        profesionalCtrl.destroy(req, res);
    });


export default router;
