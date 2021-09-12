import HttpStatus from 'http-status-codes';
import MarcaVehiculo from '../models/marca_vehiculo.model';

/**
 * Find all the marca_vehiculo
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    MarcaVehiculo.forge()
        .fetchAll()
        .then(prof => res.json({
                error: false,
                data: prof.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}
