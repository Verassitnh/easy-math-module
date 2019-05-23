# How to use `eMath.subtract()`

```js
// Example of eMath.subtract()
eMath.subtract(1, 50) 
// -> 49
```
#
###### Params 
`eMath.subtract()` Takes in **2** parameters, both numbers.
#
###### Returns 
`eMath.subtract()` Returns the differance of the numbers.
#
###### Examples
**Example with context**
```javaScript
// Bad:
function subtract(spentMoney, totalMoney) {
	return spentMoney - totalMoney;
}
```

```js
	// Good:
	// This is so much easier than having 
	// to make your own function.

	let eMath = require('easy-math-module')

	eMath.subtract(spentMoney, totalMoney);
	
```
#