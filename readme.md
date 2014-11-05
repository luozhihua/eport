eport [![Build Status](https://secure.travis-ci.org/luozhihua/eport.png)](http://travis-ci.org/luozhihua/eport)
========

Find a free port

# Install
Install this package with `npm`, if you have not install `NodeJs` or `npm`, you should install that first.
```
   npm install eport --save-dev
```
Just run this commands to install eport for your project.

# Usage
```javascript
  var eport = require(eport);
  eport([host], function(error, port) {
    // do something with the port.
  });
```

# Method
> require('eport')([host], callback);

## param

- [host] <string> A hostname or ip address that it will listen to.
- callback(error, port) <string> A hostname or ip address that it will listen to.
  - callback.error `object` throws error
  - callback.port  `number` a free port.

# Example 1

```javascript
eport("127.0.0.1", function(error, port) {
  if (!error) {
    // Now listening to the port of second arguments
  }
});

// without host
eport(function(error, port) {
  // ...
});

```

# Example 2
```javascript

 // Set a random port for livereload;
  grunt.registerTask('setServerPort', function() {
    var eport = require('eport');
    var done = this.async();

    // grunt server port;
    eport(function(error, port) {
      if (!error) {
        grunt.config.set('connect.options.livereload', port);
      } else {
        grunt.log.error(error);
      }
      done();
    });
  });
```
