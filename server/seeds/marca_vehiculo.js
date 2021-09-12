
exports.seed = function(knex) {
  return knex('marca_vehiculo').del()
    .then(function () {
      return knex('marca_vehiculo').insert([
        {id: 1, nombre: 'NA'},
        {id: 2, nombre: 'Yamaha'},
        {id: 3, nombre: 'Chevrolet'},
        {id: 4, nombre: 'Fiat'},
        {id: 5, nombre: 'Empire'},
        {id: 6, nombre: 'Ford'},
      ]);
    });
};
