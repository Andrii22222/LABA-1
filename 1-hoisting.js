'use strict';

const fn = () => {
  console.log({ a });
  var a = 7; //hoisting variable
};

module.exports = { fn };
