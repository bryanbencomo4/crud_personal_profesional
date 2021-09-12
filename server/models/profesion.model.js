import bookshelf from '../config/bookshelf';

const TABLE_NAME = 'profesion';

/**
 * Profesion model.
 */
const Profesion = bookshelf.Model.extend({
    tableName: TABLE_NAME,
});

export default bookshelf.model('Profesion', Profesion)
