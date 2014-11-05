var eport = require('eport');
var assert = require('assert');

exports.sanity = function(done) {

  eport(function(error, port) {
    assert(error === null);
    assert(typeof port === 'number');
    assert(port !== 0);
    done();
  });
};

exports.sanity2 = function(done) {
  eport('0.0.0.0', function(error, port) {

    assert(error === null);
    assert(typeof port === 'number');
    assert(port !== 0);
    done();
  });
};

exports.sanity3 = function(done) {
  eport('localhost', function(error, port) {

    assert(error === null);
    assert(typeof port === 'number');
    assert(port !== 0);
    done();
  });
};
