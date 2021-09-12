
exports.seed = function(knex) {
  return knex('profesion').del()
    .then(function () {
      return knex('profesion').insert([
        {id: 1, nombre: 'Docente'},
        {id: 2, nombre: 'Publicista'},
        {id: 3, nombre: 'Profesor'},
        {id: 4, nombre: 'Abogado'},
        {id: 5, nombre: 'Programador'},
        {id: 6, nombre: 'Ingeniero'},
      ]);
    });
};
