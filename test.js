const eMath = require('./index');
const { test } = require('zora');

test('Test eMath.subtract()', t => {
	t.equal(eMath.add( 5, 5), 10)
})

test('Test eMath.mult()', t => {
	t.equal(eMath.mult( 5, 5), 25)
})

test('Test eMath.divide()', t => {
	t.equal(eMath.divide( 5, 5), 1)
})

test('Test eMath.percent()', t => {
	t.equal(eMath.percent( 5, 5), 100)
})

test('Test eMath.mod()', t => {
	t.equal(eMath.mod( 5, 5), 0)
})

test('Test eMath.addMany()', t => {
	t.equal(eMath.addMany([5, 10, 20]), 35)
})

test('Test eMath.fileSize()', t => {
	t.equal(eMath.fileSize(['test.js', 'index.js'], '1GB'), 0.767)
	t.equal(eMath.fileSize(['test.js', 'index.js'], 10000), 7.17)

})
