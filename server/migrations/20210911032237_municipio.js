/**
 * Create municipio table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.up = function (knex) {
    return knex.schema.createTable('municipio', table => {
        table.increments('id').primary().unsigned();
        table.string('nombre').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * Drop municipio table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
    return knex.schema.dropTable('municipio');
};
