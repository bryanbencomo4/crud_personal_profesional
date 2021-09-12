import HttpStatus from 'http-status-codes';
import Municipio from '../models/municipio.model';

/**
 * Find all the municipio
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Municipio.forge()
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
