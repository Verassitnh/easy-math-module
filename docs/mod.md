# How to use `eMath.mod()`

```js
// Example of eMath.mod()
eMath.mod(12, 2)
// -> 6
```

###### Params 
`eMath.mod()` Takes in **2** numbers as parameters.
#
###### Returns: 
`eMath.mod` Returns the modulo (the remainer) of  the two numbers passed in when called.
#
###### Examples:
**Examples with context**
```javaScript
// Bad:
function modulus() {
	return 10 % 5;
}
```

```js
// Good:
// This is so much easier than having 
// to make your own function.

let eMath = require('easy-math-module')

eMath.mod(10, 5)

```
#