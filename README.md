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
        lastName: function(value) {
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

The value of 'firstName' is now 'LADY', the value of 'lastName' is now 'gaga'.

You can also call the set method as usual:

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

## License

Backbone.getters.setters is available under the MIT license:

Copyright (c) 2013 Tal Bereznitskey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Contact

Find me on github: [Tal Bereznitskey](http://github.com/berzniz)

Follow me on Twitter: [@ketacode](https://twitter.com/ketacode)

### ENJOY!