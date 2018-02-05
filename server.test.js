const server = require('./server');

describe('testing server response status code for route books', () => {
  test('should return status code 200', () => {
    server.inject('/books', (res) => {
      expect(res.statusCode).toBe(200);
    });
  });
});
