import HttpStatus from 'http-status-codes';
import Profesional from '../models/profesional.model';

/**
 * Find all the profesionales
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Profesional.forge()
        .fetchAll({
            withRelated: [
                'municipio',
                'profesion',
                'sexo',
                'tipoVehiculo',
                'marcaVehiculo'
            ],
        })
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

/**
 *  Find profesional by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
    Profesional.forge({id: req.params.id})
        .fetch({
            withRelated: [
                'municipio',
                'profesion',
                'sexo',
                'tipoVehiculo',
                'marcaVehiculo'
            ],
        })
        .then(prof => {
            if (!prof) {
                res.status(HttpStatus.NOT_FOUND).json({error: true, data: {}});
            }
            else {
                res.json({ error: false, data: prof.toJSON()});
            }
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
        })
    );
}

/**
 * Store new profesional
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
	Profesional.forge(req.body).save()
		.then(async (prof) => {
			return Profesional.forge({id: prof.toJSON().id})
				.fetch({
					withRelated: [
						'municipio',
						'profesion',
						'sexo',
						'tipoVehiculo',
						'marcaVehiculo'
					],
				})
				.then(prof => {
					if (!prof) {
						return {};
					}
					else {
						return prof.toJSON();
					}
				})
				.catch(err => ({}))
		})
        .then(prof => res.json({
                success: true,
                data: prof
            })
        )
        .catch(err => {

			console.log(err);

			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            });
		});
}

/**
 * Update profesional by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
    Profesional.forge({id: req.params.id})
        .fetch({require: true})
        .then(prof => prof.save({
            nombres_y_apellidos: req.body.nombres_y_apellidos || prof.get('nombres_y_apellidos'),
            cedula: req.body.cedula || prof.get('cedula'),
            telefono: req.body.telefono || prof.get('telefono'),
            direccion: req.body.direccion || prof.get('direccion'),
            anyo_vehiculo: req.body.anyo_vehiculo || prof.get('anyo_vehiculo'),
            municipio_id: req.body.municipio_id || prof.get('municipio_id'),
            profesion_id: req.body.profesion_id || prof.get('profesion_id'),
            sexo_id: req.body.sexo_id || prof.get('sexo_id'),
            tipo_vehiculo_id: req.body.tipo_vehiculo_id || prof.get('tipo_vehiculo_id'),
            marca_vehiculo_id: req.body.marca_vehiculo_id || prof.get('marca_vehiculo_id'),      
		})
			.then(async (prof) => {
				return Profesional.forge({id: prof.toJSON().id})
					.fetch({
						withRelated: [
							'municipio',
							'profesion',
							'sexo',
							'tipoVehiculo',
							'marcaVehiculo'
						],
					})
					.then(prof => {
						if (!prof) {
							return {};
						}
						else {
							return prof.toJSON();
						}
					})
					.catch(err => ({}))
			})
            .then((prof) => res.json({
                    error: false,
                    data: prof,
                })
            )
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    error: true,
                    data: {message: err.message}
                })
            )
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Destroy profesional by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
    Profesional.forge({id: req.params.id})
        .fetch({require: true})
        .then(porfs => porfs.destroy()
            .then(() => res.json({
                    error: false,
                    data: {message: 'Profesional deleted successfully.'}
                })
            )
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    error: true,
                    data: {message: err.message}
                })
            )
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}
