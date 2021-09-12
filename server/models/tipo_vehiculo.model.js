import bookshelf from '../config/bookshelf';

const TABLE_NAME = 'tipo_vehiculo';

/**
 * TipoVehiculo model.
 */
const TipoVehiculo = bookshelf.Model.extend({
    tableName: TABLE_NAME,
});

export default bookshelf.model('TipoVehiculo', TipoVehiculo)
