const handle = (request, response) => {
  response({
    data: null,
    statusCode: 200,
  });
};


module.exports = {
  method: 'GET',
  path: '/books',
  handler: handle,
};
