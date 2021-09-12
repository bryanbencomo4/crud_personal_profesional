import HttpStatus from 'http-status-codes';
import TipoVehiculo from '../models/tipo_vehiculo.model';

/**
 * Find all the tipo_vehiculo
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    TipoVehiculo.forge()
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
