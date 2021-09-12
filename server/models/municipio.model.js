import bookshelf from '../config/bookshelf';

const TABLE_NAME = 'municipio';

/**
 * Municipio model.
 */
const Municipio = bookshelf.Model.extend({
    tableName: TABLE_NAME,
});

export default bookshelf.model('Municipio', Municipio)
