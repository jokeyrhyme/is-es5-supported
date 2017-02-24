'use strict'

// 3rd-party modules

var test = require('tape')

// our modules

var isES5Supported = require('../')

// this module

test('module exports a Boolean', function (t) {
  t.ok(typeof isES5Supported === 'boolean')
  t.end()
})

if (typeof process !== 'undefined' && !process.browser) {
  test('test result is `true` in Node.js', function (t) {
    t.ok(isES5Supported)
    t.end()
  })
}
