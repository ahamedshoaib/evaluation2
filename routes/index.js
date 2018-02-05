const books = require('./books');
const storeBooks = require('./storeBooks');

module.exports = [].concat(books).concat(storeBooks);
