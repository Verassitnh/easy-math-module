# How to use `eMath.add()`

```js
// Example of eMath.add()
eMath.add([4,5,6])
```

###### Params 
`eMath.add()` Takes in 1 parameter, an `array` of numbers

###### Returns 
`eMath.add()` Return the sum of an array of numbers passed in when called.

###### Examples
**Example with context**
```js
// Bad:
function getPrice(array_of_products) {

	let prices = []

	for (let x in array_of_products) {
		prices.push(array_of_products[x])
	}

	function add(array) {
		let totalPrice = 0;
		for (let i in array) {
			// It is not a good practice to use:
			// result (operator +=, *= , /=) var[key] 

			totalPrice += array[i]
		}
	}
	return add(prices)
}


```

```js
	// Good:
	// This is so much easier than having 
	// to make your own function.

	let eMath = require('easy-math-module')

	function getPrice(array_of_products) {
		let prices = [];

		for (let x in array_of_products) {
			prices.push(array_of_products[x])
		}
		return eMath.add(prices)
	}
```
Find a Bug?
[Submit an issue](https://github.com/Gninoskcaj/easy-math-module/issues/new/choose)