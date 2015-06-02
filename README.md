# supports-es5.js

does this JavaScript environment conform to ECMAScript 5?

## What is this?

I made this after reading [Kangax](https://github.com/kangax)'s terrific
[ES5 compatibility table](http://kangax.github.io/compat-table/es5/). Rather
than feature-detect every single piece of ECMAScript 5, I've selected the
smallest number of tests to identity non-conformant JavaScript environments.

> `parseInt()` ignores leading zeros

- after this test, we get a `false` in most old browsers

> Strict Mode

- after this test, we get a `false` in Internet Explorer 9 and environments or
apps that load [ES5-shim](https://github.com/es-shims/es5-shim)

> `Date.prototype.toISOString`

- after this test, we get a `false` in EJS

Job done!

## Known Issues

- Internet Explorer 10 Platform Preview 2 will get a `false` (who cares?)
