
# How to use `eMath.percent()`

```js
// Example of eMath.mult()
eMath.percent(1, 50) 
// -> 2
```
#
###### Params 
`eMath.percent()` Takes in **2** parameters, both numbers.
#
###### Returns 
`eMath.mult()` Returns the **percentage the first param is of the second param**.
#
###### Examples
**Example with context**
```javaScript
// Bad:
function findPercentOfMonyISpent(spentMoney, totalMoney) {
	return spentMoney / totalMoney * 100 
}
```

```js
	// Good:
	// This is so much easier than having 
	// to make your own function.

	let eMath = require('easy-math-module')

	eMath.percent(spentMoney, totalMoney);
	
```
#


Find a Bug?
[Submit an issue](https://github.com/Gninoskcaj/easy-math-module/issues/new/choose)