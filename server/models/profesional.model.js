import bookshelf from '../config/bookshelf';

const TABLE_NAME = 'personal_profesional';

const Profesional = bookshelf.Model.extend({
    tableName: TABLE_NAME,
    municipio: function () {
        return this.belongsTo('Municipio')
    },
    profesion: function () {
        return this.belongsTo('Profesion')
    },
    sexo: function () {
        return this.belongsTo('Sexo')
    },
    tipoVehiculo: function () {
        return this.belongsTo('TipoVehiculo')
    },
    marcaVehiculo: function () {
        return this.belongsTo('MarcaVehiculo')
    },
});

export default bookshelf.model('Profesional', Profesional);
