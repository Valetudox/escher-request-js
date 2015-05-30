var chai = require('chai');
var expect = chai.expect;
var plugin = require('./');

describe('Escher Request Js', function() {

  it('should gives back the given request', function() {
    var givenRequest = {};
    expect(plugin('key', 'secret')(givenRequest)).to.equal(givenRequest);
  });

});
