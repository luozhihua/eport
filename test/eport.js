var freeport = require('eport');
var assert = require('assert');

exports.sanity = function(done) {

  eport(function(error, port) {
    assert(error === null);
    assert(typeof port === 'number');
    assert(port !== 0);
    done();
  });

};
