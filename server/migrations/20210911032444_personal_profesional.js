/**
 * Create personal_profesional table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.up = function (knex) {
    return knex.schema.createTable('personal_profesional', table => {
        table.increments('id').primary().unsigned();
        table.string('nombres_y_apellidos').notNullable();
        table.string('cedula').notNullable();
        table.string('telefono').notNullable();
        table.string('direccion').notNullable();
        table.integer('anyo_vehiculo').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.integer('municipio_id').unsigned();
        table.integer('profesion_id').unsigned();
        table.integer('sexo_id').unsigned();
        table.integer('tipo_vehiculo_id').unsigned();
        table.integer('marca_vehiculo_id').unsigned();

        // Foreing Keys
        table.foreign('municipio_id').references('id').inTable('municipio');
        table.foreign('profesion_id').references('id').inTable('profesion');
        table.foreign('sexo_id').references('id').inTable('sexo');
        table.foreign('tipo_vehiculo_id').references('id').inTable('tipo_vehiculo');
        table.foreign('marca_vehiculo_id').references('id').inTable('marca_vehiculo');
    });
};

/**
 * Drop personal_profesional table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
    return knex.schema.dropTable('personal_profesional');
};
