import HttpStatus from 'http-status-codes';
import Profesion from '../models/profesion.model';

/**
 * Find all the profesion
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Profesion.forge()
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
