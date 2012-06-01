// from https://github.com/berzniz/backbone.getters.setters
Backbone.GSModel = Backbone.Model.extend({

  get: function(attr) {
    var format = arguments.length > 1 ? arguments[1] : null;
    // Call the getter if available
    if (_.isFunction(this.getters[attr])) {
      return this.getters[attr].call(this, format);
    }

    return Backbone.Model.prototype.get.call(this, attr);
  },

  set: function(key, value, format, options) {

    // Normalize the key-value into an object
    if (_.isObject(key) || key == null) {
      attrs = key;
      format = value;
      options = format;
    } else {
      attrs = {};
      attrs[key] = value;
    }

    if ( _.isObject(format) )
    {
      options = format;
      format = null;
    }

    // Go over all the set attributes and call the setter if available
    for (var attr in attrs) {
      if ( ! attrs.hasOwnProperty(attr) )
        continue;
      if (_.isFunction(this.setters[attr])) {
        attrs[attr] = this.setters[attr].call(this, attrs[attr], format);
      }
    }

    return Backbone.Model.prototype.set.call(this, attrs, options);
  },

  rawget: function() {
    return Backbone.Model.prototype.get.apply(this, arguments);
  },

  rawset: function() {
    return Backbone.Model.prototype.set.apply(this, arguments);
  },


  getters: {},

  setters: {}

});