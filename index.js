'use strict';

var modernizr = require('modernizr');
var through = require('through2');
var Vinyl = require('vinyl');

module.exports = function(options, path) {

	// Prepare arguments.
	options = options || {};
	path = path || 'modernizr.js';

	// Passthrough buffers.
	var buffers = function(file, encoding, callback) {
		return callback(null, file);
	};

	// Generate custom Modernizr build.
	var build = function(callback) {
		modernizr.build(options, function(result) {
			var file = new Vinyl({
				path: path,
				contents: new Buffer(result)
			});

			stream.push(file);
			return callback();
		});
	};

	var stream = through.obj(buffers, build);
	return stream;
};
