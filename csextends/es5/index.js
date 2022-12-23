// Generated by CoffeeScript 1.12.7
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

module.exports = function() {
  var key, newKlass, oldKlass, proto, value;
  if (arguments.length === 2) {
    oldKlass = arguments[0];
    proto = arguments[1];
  } else {
    oldKlass = this;
    proto = arguments[0];
  }
  newKlass = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (proto != null ? proto.hasOwnProperty('constructor') : void 0) {
        proto.constructor.apply(this, arguments);
      } else {
        _Class.__super__.constructor.apply(this, args);
      }
    }

    return _Class;

  })(oldKlass);
  if (proto != null) {
    for (key in proto) {
      if (!hasProp.call(proto, key)) continue;
      value = proto[key];
      newKlass.prototype[key] = value;
    }
  }
  return newKlass;
};