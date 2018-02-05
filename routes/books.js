const https = require('https');

const groupBy = require('../groupBy');

const api1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
const api2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';

const addRating = (allBooks, done) => {
  let counter = 0;
  const booksWithRatings = allBooks;
  const attachRating = bookNo => (rating) => {
    rating.setEncoding('utf8');
    let rawData = '';
    rating.on('data', (chunk) => { rawData += chunk; });
    rating.on('end', () => {
      booksWithRatings[bookNo].rating = JSON.parse(rawData).rating;
      counter += 1;
      if (counter === allBooks.length) {
        done(booksWithRatings);
      }
    });
  };

  for (let bookNo = 0; bookNo < allBooks.length; bookNo += 1) {
    https.get(api2 + allBooks[bookNo].id, attachRating(bookNo));
  }
};

const handle = (request, response) => {
  let allBooks = null;

  https.get(api1, (books) => {
    books.setEncoding('utf8');
    let rawData = '';
    books.on('data', (chunk) => { rawData += chunk; });
    books.on('end', () => {
      allBooks = JSON.parse(rawData);
      allBooks = allBooks.books;
      addRating(allBooks, (booksWithRatings) => {
        response({
          data: groupBy(booksWithRatings, 'Author'),
          statusCode: 200,
        });
      });
    });
  });
};


module.exports = {
  method: 'GET',
  path: '/books',
  handler: handle,
};
