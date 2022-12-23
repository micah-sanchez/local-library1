// Generated by CoffeeScript 1.8.0
(function() {
  var TaskGroup, ignorefs, isDirectoryUtil, pathUtil, safefs, scandir,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty;

  pathUtil = require('path');

  safefs = require('safefs');

  TaskGroup = require('taskgroup').TaskGroup;

  ignorefs = require('ignorefs');

  isDirectoryUtil = function(path, next) {
    if ((path != null ? path.isDirectory : void 0) != null) {
      return next(null, path.isDirectory(), path);
    } else {
      safefs.stat(path, function(err, stat) {
        if (err) {
          return next(err);
        }
        return next(null, stat.isDirectory(), stat);
      });
    }
    return this;
  };

  scandir = function() {
    var arg, args, err, key, list, next, opts, tree, value, _i, _len;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    list = {};
    tree = {};
    opts = {};
    for (_i = 0, _len = args.length; _i < _len; _i++) {
      arg = args[_i];
      if (typeof arg === 'string') {
        opts.path = arg;
      }
      if (typeof arg === 'function') {
        opts.next = arg;
      }
      for (key in arg) {
        if (!__hasProp.call(arg, key)) continue;
        value = arg[key];
        opts[key] = value;
      }
    }
    if (opts.recurse == null) {
      opts.recurse = true;
    }
    if (opts.readFiles == null) {
      opts.readFiles = false;
    }
    if (opts.ignorePaths == null) {
      opts.ignorePaths = false;
    }
    if (opts.ignoreHiddenFiles == null) {
      opts.ignoreHiddenFiles = false;
    }
    if (opts.ignoreCommonPatterns == null) {
      opts.ignoreCommonPatterns = false;
    }
    if (opts.next == null) {
      opts.next = function(err) {
        if (err) {
          throw err;
        }
      };
    }
    next = opts.next;
    if (opts.action != null) {
      if (opts.fileAction == null) {
        opts.fileAction = opts.action;
      }
      if (opts.dirAction == null) {
        opts.dirAction = opts.action;
      }
    }
    if (opts.parentPath && !opts.path) {
      opts.path = opts.parentPath;
    }
    if (!opts.path) {
      err = new Error('scandirectory: path is needed');
      return next(err);
    }
    safefs.readdir(opts.path, function(err, files) {
      var tasks;
      if (err) {
        return next(err);
      }
      if (files.length === 0) {
        return next(null, list, tree);
      }
      tasks = new TaskGroup({
        concurrency: 0
      }).done(function(err) {
        return opts.next(err, list, tree);
      });
      files.forEach(function(file) {
        return tasks.addTask(function(complete) {
          var fileFullPath, fileRelativePath, isIgnoredFile;
          fileFullPath = pathUtil.join(opts.path, file);
          fileRelativePath = opts.relativePath ? pathUtil.join(opts.relativePath, file) : file;
          isIgnoredFile = ignorefs.isIgnoredPath(fileFullPath, {
            ignorePaths: opts.ignorePaths,
            ignoreHiddenFiles: opts.ignoreHiddenFiles,
            ignoreCommonPatterns: opts.ignoreCommonPatterns,
            ignoreCustomPatterns: opts.ignoreCustomPatterns
          });
          if (isIgnoredFile) {
            return complete();
          }
          return isDirectoryUtil(fileFullPath, function(err, isDirectory, fileStat) {
            var handle;
            if (err) {
              return complete(err);
            }
            if (tasks.paused) {
              return complete();
            }
            if (isDirectory) {
              handle = function(err, skip, subtreeCallback) {
                if (err) {
                  return complete(err);
                }
                if (tasks.paused) {
                  return complete();
                }
                if (skip) {
                  return complete();
                }
                list[fileRelativePath] = 'dir';
                tree[file] = {};
                if (!opts.recurse) {
                  return complete();
                }
                return scandir({
                  path: fileFullPath,
                  relativePath: fileRelativePath,
                  fileAction: opts.fileAction,
                  dirAction: opts.dirAction,
                  readFiles: opts.readFiles,
                  ignorePaths: opts.ignorePaths,
                  ignoreHiddenFiles: opts.ignoreHiddenFiles,
                  ignoreCommonPatterns: opts.ignoreCommonPatterns,
                  ignoreCustomPatterns: opts.ignoreCustomPatterns,
                  recurse: opts.recurse,
                  stat: opts.fileStat,
                  next: function(err, _list, _tree) {
                    var filePath, fileType;
                    tree[file] = _tree;
                    for (filePath in _list) {
                      if (!__hasProp.call(_list, filePath)) continue;
                      fileType = _list[filePath];
                      list[filePath] = fileType;
                    }
                    if (err) {
                      return complete(err);
                    }
                    if (tasks.paused) {
                      return complete();
                    }
                    if (subtreeCallback) {
                      return subtreeCallback(complete);
                    }
                    return complete();
                  }
                });
              };
              if (opts.dirAction) {
                return opts.dirAction(fileFullPath, fileRelativePath, handle, fileStat);
              } else if (opts.dirAction === false) {
                return handle(err, true);
              } else {
                return handle(err, false);
              }
            } else {
              handle = function(err, skip) {
                if (err) {
                  return complete(err);
                }
                if (tasks.paused) {
                  return complete();
                }
                if (skip) {
                  return complete();
                }
                if (opts.readFiles) {
                  return safefs.readFile(fileFullPath, function(err, data) {
                    if (err) {
                      return complete(err);
                    }
                    if (opts.readFiles !== 'binary') {
                      data = data.toString();
                    }
                    list[fileRelativePath] = data;
                    tree[file] = data;
                    return complete();
                  });
                } else {
                  list[fileRelativePath] = 'file';
                  tree[file] = true;
                  return complete();
                }
              };
              if (opts.fileAction) {
                return opts.fileAction(fileFullPath, fileRelativePath, handle, fileStat);
              } else if (opts.fileAction === false) {
                return handle(err, true);
              } else {
                return handle(err, false);
              }
            }
          });
        });
      });
      return tasks.run();
    });
    return this;
  };

  module.exports = scandir;

  module.exports.scandirectory = module.exports.scandir = scandir;

}).call(this);