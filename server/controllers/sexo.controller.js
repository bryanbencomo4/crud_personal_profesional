import HttpStatus from 'http-status-codes';
import Sexo from '../models/sexo.model';

/**
 * Find all the sexo
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Sexo.forge()
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
