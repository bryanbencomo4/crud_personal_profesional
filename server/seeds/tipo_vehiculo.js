
exports.seed = function(knex) {
  return knex('tipo_vehiculo').del()
    .then(function () {
      return knex('tipo_vehiculo').insert([
        {id: 1, nombre: 'NA'},
        {id: 2, nombre: 'Motocicleta'},
        {id: 3, nombre: 'Camioneta'},
        {id: 4, nombre: 'Automovil'},
      ]);
    });
};
