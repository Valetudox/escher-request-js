'use strict';

var EscherSigner = require('./escher-signer');

module.exports = function(key, secret) {

  return function(request) {
    return new EscherSigner(key, secret, request).sign();
  };

};
