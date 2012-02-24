# Backbone.getters.setters

A custom getters and setters plugin for [Backbone.js](http://documentcloud.github.com/backbone).

## Getting started

Include Backbone (including underscore.js) in your page before including the Backbone.getters.setters plugin and you're all set to go.

The plugin is tested with Backbone version 0.9.1

### Configure getters on the Model

Your model should extend Backbone.GSModel instead of Backbone.Model in order to support getters:

```js
var MyModel = Backbone.GSModel.extend({
});
```

Configure your getters by adding a getter function for each attribute:

```js
var MyModel = Backbone.GSModel.extend({
  getters: {
  		fullName: function() {
		    return this.get('firstName') + ' ' + this.get('lastName');
	    }
  },

  defaults: {
    firstName: 'Lady',
    lastName: 'Gaga'
  }
});
```

Then simply call the regular get method:

```js
var someModel = new MyModel();
alert(someModel.get('fullName'));
```

The output of the above will be an alert with the text: 'Lady Gaga'.

### Configure setters on the Model

Your model should extend Backbone.GSModel instead of Backbone.Model in order to support setters:

```js
var MyModel = Backbone.GSModel.extend({
});
```

Configure your setters by adding a setter function for each attribute:

```js
var MyModel = Backbone.GSModel.extend({
  setters: {
    	firstName: function(value) {
		    return value.toUpperCase();
	    },
      lastName:: function(value) {
  	    return value.toLowerCase();
	    }
  },

  defaults: {
    firstName: 'Lady',
    lastName: 'Gaga'
  }
});
```

In the above example, the setters were already called by the defaults hash.

The value of 'firstName' is not 'LADY', the value of 'lastName' is not 'gaga'. Don't trust me, just get them and see:

```js
var someModel = new MyModel();
alert(someModel.get('firstName'));
alert(someModel.get('lastName'));
```

You can call the set method yourself:

```js
someModel.set('firstName', 'letters');
```

And now the value of 'firstName' is 'LETTERS'.

You can also set multiple attributes as regular:

```js
someModel.set({
  'firstName': 'everything',
  'lastName': 'NUMBERS'
});
```

And now the value of 'firstName' is 'EVERYTHING' and the value of 'lastName' is 'numbers'.

### ENJOY!