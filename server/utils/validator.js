import Joi from '@hapi/joi';

export default {
    storeProfesional: Joi.object({
		nombres_y_apellidos: Joi.string().required(),
		cedula: Joi.string().required(),
		telefono: Joi.string().required(),
		direccion: Joi.string().required(),
		anyo_vehiculo: Joi.number().integer().required(),
		municipio_id: Joi.number().integer().required(),
		profesion_id: Joi.number().integer().required(),
		sexo_id: Joi.number().integer().required(),
		tipo_vehiculo_id: Joi.number().integer().required(),
		marca_vehiculo_id: Joi.number().integer().required(),
	}),
		
	updateProfesional: Joi.object({
		nombres_y_apellidos: Joi.string().required(),
		cedula: Joi.string().required(),
		telefono: Joi.string().required(),
		direccion: Joi.string().required(),
		anyo_vehiculo: Joi.number().integer().required(),
		municipio_id: Joi.number().integer().required(),
		profesion_id: Joi.number().integer().required(),
		sexo_id: Joi.number().integer().required(),
		tipo_vehiculo_id: Joi.number().integer().required(),
		marca_vehiculo_id: Joi.number().integer().required(),
	}),


};
