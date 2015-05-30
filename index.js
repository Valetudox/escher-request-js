'use strict';

var EscherSigner = require('./escher-signer');

module.exports = function(key, secret) {
  var escherSigner = new EscherSigner(key, secret);
  return escherSigner.sign;
};
