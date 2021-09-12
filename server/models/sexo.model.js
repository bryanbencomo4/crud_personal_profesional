import bookshelf from '../config/bookshelf';

const TABLE_NAME = 'sexo';

/**
 * Sexo model.
 */
const Sexo = bookshelf.Model.extend({
    tableName: TABLE_NAME,
});

export default bookshelf.model('Sexo', Sexo)
