const assert = require('assert')
const Touch = require('../dist/easy-touch.js')
const touch = new Touch({})
assert.throws(() => touch.verifyAction('notexist'))
touch.verifyAction('pan')
assert.throws(() => new Touch())
console.log('test is pass !!!')