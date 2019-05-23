# How to use `eMath.divide()`

```js
// Example of eMath.divide()
eMath.divide(12, 2)
// -> 6
```

###### Params 
`eMath.divide()` Takes in **2** number as parameters.
#
###### Returns: 
`eMath.divide` Returns the quotient two numbers passed in when called.
#
###### Examples:
**Examples with context**
```javaScript
// Bad:
function divide() {
	return 10 / 5;
}
```

```js
// Good:
// This is so much easier than having 
// to make your own function.

let eMath = require('easy-math-module')

eMath.divide(10, 5)

```
#