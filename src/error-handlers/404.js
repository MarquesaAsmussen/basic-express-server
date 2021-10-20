'use strict';

// not sure if this is structured or imported properly

module.exports = function (error, req, res, next) {
  console.log(error);
  res.status(404).send('404/Not-Found');
  res.end();
};
