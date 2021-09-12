import express from 'express';
import profesionalRoutes from './profesional.route';
import profesionRoutes from './profesion.route';
import sexoRoutes from './sexo.route';
import municipioRoutes from './municipio.route';
import marcaVehiculoRoutes from './marca_vehiculo.route';
import tipoVehiculoRoutes from './tipo_vehiculo.route';

const router = express.Router();

router.use('/profesional', profesionalRoutes);
router.use('/profesion', profesionRoutes);
router.use('/sexo', sexoRoutes);
router.use('/municipio', municipioRoutes);
router.use('/marca_vehiculo', marcaVehiculoRoutes);
router.use('/tipo_vehiculo', tipoVehiculoRoutes);

export default router;
