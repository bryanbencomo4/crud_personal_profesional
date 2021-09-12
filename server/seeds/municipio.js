
exports.seed = function(knex) {
  return knex('municipio').del()
    .then(function () {
      return knex('municipio').insert([
        {id: 1, nombre: 'San Cristobal'},
        {id: 2, nombre: 'Cardenas'},
        {id: 3, nombre: 'Libertad'},
        {id: 4, nombre: 'Fernandez Feo'},
        {id: 5, nombre: 'Junin'},
        {id: 6, nombre: 'Garcia de Hevia'},
        {id: 7, nombre: 'Bolivar'},
      ]);
    });
};
