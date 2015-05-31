'use strict';

class EscherSigner {

  constructor(key, secret, request) {
    this._key = key;
    this._secret = secret;
    this._request = request;
  }


  sign() {
    return this._request;
  }

}

module.exports = EscherSigner;
