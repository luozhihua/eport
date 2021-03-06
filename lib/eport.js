var net = require('net');

/**
 * Get a free port
 * @module
 * @param  {string}   host     hostname or ip, default to '127.0.0.1';
 * @param  {Function} callback a functionto for call on got a free port;
 */
module.exports = function(host, callback) {
  var server = net.createServer();
  var port = 0;

  if (typeof host === 'function') {
    callback = host;
    host = '127.0.0.1';
  }
  host = host || '127.0.0.1';

  server.on('listening', function() {
    port = server.address().port;
    server.close();
  });

  server.on('close', function() {
    callback(null, port);
  });

  server.listen(0, host);

};
