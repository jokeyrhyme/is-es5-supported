# is-es5-supported.js

does this JavaScript environment conform to ECMAScript 5?


## What is this?

I made this after reading [Kangax](https://github.com/kangax)'s terrific
[ES5 compatibility table](http://kangax.github.io/compat-table/es5/). Rather
than feature-detect every single piece of ECMAScript 5, I've selected the
smallest number of tests to identify non-conformant JavaScript environments.

> `parseInt()` ignores leading zeros

- after this test, we get a `false` in most old browsers

> Strict Mode

- after this test, we get a `false` in Internet Explorer 9 and environments or
apps that load [ES5-shim](https://github.com/es-shims/es5-shim)

> `Date.prototype.toISOString`

- after this test, we get a `false` in EJS

Job done!


## Supported Environments

I've manually tested in a range of environments:

- `true`: Node.js (0.12), Chrome (43), Safari (8), Firefox (38), Internet
  Explorer (10, 11), Edge

- `false`: Internet Explorer (6, 7, 8, 9)


## Usage

- CommonJS (e.g. Node.js, Browserify, etc) use [index.js](index.js)

```javascript
var isES5Supported = require('is-es5-supported');
console.log(isES5Supported); // `true` or `false`
```

- [dist/index.js](dist/index.js) is a UMD-wrapped version for browsers and AMD

```html
<script src="dist/index.js"></script>
<script>
console.log(isES5Supported); // `true` or `false`
</script>
```


## Known Issues

- this approach does assume correlations between the 3 included tests and the
  rest of the ECMASCript 5 implementation, which might not return correct
  results in exotic environments

- Internet Explorer 10 Platform Preview 2 will get a `false` (who cares?)
