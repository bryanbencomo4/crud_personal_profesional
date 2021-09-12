import bookshelf from '../config/bookshelf';

const TABLE_NAME = 'marca_vehiculo';

/**
 * MarcaVehiculo model.
 */
const MarcaVehiculo = bookshelf.Model.extend({
    tableName: TABLE_NAME,
});

export default bookshelf.model('MarcaVehiculo', MarcaVehiculo)
