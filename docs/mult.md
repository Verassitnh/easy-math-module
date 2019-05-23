
# How to use `eMath.mult()`

```js
// Example of eMath.mult()
eMath.mult([4,5,6], 2) 
// -> [8,10,12]
```
#
###### Params 
`eMath.mult()` Takes in **2** parameters.  One, an `array` of numbers. Two, an optional value to multiply all of the values in the array by.
#
###### Returns 
`eMath.mult()` Return the product of an array of numbers passed in when called.
#
###### Examples
**Example with context**
```javaScript
// Bad:
function findTaxForProducts(array_of_products_prices) {
	let newArray = [];
	for (let x in array_of_products) {
		newArray.push(array_of_products[x] * .9)
	}
	return newArray;
}
```

```js
	// Good:
	// This is so much easier than having 
	// to make your own function.

	let eMath = require('easy-math-module')

	eMath.mult(array_of_product_prices, .9)
	
```
#