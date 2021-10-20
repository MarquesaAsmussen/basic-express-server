'use strict';

module.exports = function (req, res, next) {
  console.log(request.method);

  let method = req.method;
  if (method === 'POST' || method === 'GET') {
    next();
  } else {
    next('something went wrong');
  }
};
