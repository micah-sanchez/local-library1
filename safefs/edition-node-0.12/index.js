/* eslint no-sync:0 */
'use strict'; // Import

var fsUtil = require('graceful-fs');

var pathUtil = require('path'); // =====================================
// Define Module


var safefs = {
  // =====================================
  // Our own custom functions
  // Get the parent path
  getParentPathSync: function getParentPathSync(path) {
    return path // remove trailing slashes
    .replace(/[/\\]$/, '') // remove last directory
    .replace(/[/\\][^/\\]+$/, '');
  },
  // Ensure path exists
  // next(err, existed)
  ensurePath: function ensurePath(path, opts, next) {
    // Prepare
    if (next == null) {
      next = opts;
      opts = null;
    }

    opts = opts || {}; // Check

    safefs.exists(path, function (exists) {
      // Error
      if (exists) return next(null, true); // Success

      var parentPath = safefs.getParentPathSync(path);
      safefs.ensurePath(parentPath, opts, function (err) {
        // Error
        if (err) return next(err, false); // Success

        safefs.mkdir(path, opts.mode, function () {
          // ignore mkdir error, as if it already exists, then we are winning
          safefs.exists(path, function (exists) {
            // Error
            if (!exists) {
              var _err = new Error("Failed to create the directory: ".concat(path));

              return next(_err, false);
            } // Success


            next(null, false);
          });
        });
      });
    }); // Chain

    return safefs;
  },
  // =====================================
  // Safe Wrappers for Standard Methods
  // Write File
  // next(err)
  writeFile: function writeFile(path, data, opts, next) {
    // Prepare
    if (next == null) {
      next = opts;
      opts = null;
    } // Ensure path


    safefs.ensurePath(pathUtil.dirname(path), opts, function (err) {
      // Error
      if (err) return next(err); // Write data

      fsUtil.writeFile(path, data, opts, next);
    }); // Chain

    return safefs;
  },
  // Append File
  // next(err)
  appendFile: function appendFile(path, data, opts, next) {
    // Prepare
    if (next == null) {
      next = opts;
      opts = null;
    } // Ensure path


    safefs.ensurePath(pathUtil.dirname(path), opts, function (err) {
      // Error
      if (err) return next(err); // Write data

      fsUtil.appendFile(path, data, opts, next);
    }); // Chain

    return safefs;
  },
  // Mkdir
  // next(err)
  mkdir: function mkdir(path, mode, next) {
    // Prepare
    if (next == null) {
      next = mode;
      mode = null;
    }

    if (mode == null) {
      /* eslint no-bitwise:0, no-magic-numbers:0 */
      mode = 511 & ~process.umask();
    } // Action


    fsUtil.mkdir(path, mode, next); // Chain

    return safefs;
  },
  // Unlink
  // don't error if the path doesn't already exist
  // next(err)
  unlink: function unlink(path, next) {
    // Stat
    safefs.exists(path, function (exists) {
      if (exists === false) return next();
      fsUtil.unlink(path, next);
    }); // Chain

    return safefs;
  }
}; // Add any missing methods

Object.keys(fsUtil).forEach(function (key) {
  var value = fsUtil[key]; // we do the `!safefs[key]` as we don't want to over-write our own enhancements
  // we do the `value.bind` check, as we may interate across trivial types
  // we do the `Function.prototype.bind` check, as underscore is a function that has it's own bind

  if (!safefs[key] && value && value.bind === Function.prototype.bind) {
    safefs[key] = value.bind(fsUtil);
  }
}); // Export

module.exports = safefs;