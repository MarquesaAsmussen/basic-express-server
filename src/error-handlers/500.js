'use strict';

// not sure if this is structured or imported properly

module.exports = function (error, req, res, next) {
  console.log(error);
  res.status(500).send('500/Server Error');
  res.end();
};
