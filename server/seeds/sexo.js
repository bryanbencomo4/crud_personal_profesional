
exports.seed = function(knex) {
  return knex('sexo').del()
    .then(function () {
      return knex('sexo').insert([
        {id: 1, nombre: 'masculino'},
        {id: 2, nombre: 'femenino'},
      ]);
    });
};
