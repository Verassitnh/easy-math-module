# Easy-Math-Module


## How to use:


First...
```shell
$ npm i easy-math-module
```
Then require it in the file you want.
```js
const eMath = require('easy-math-module')
```
## Functions

[`
eMath.add(a,b)
`](#eMathadd)

[`
eMath.mult(a,b)
`](#emathmult)

[`
eMath.divide(a,b)
`](#emathdivide)

[`
eMath.mod(a,b)
`](#emathmod)

[`
eMath.percent(a,b)
`](#emathpercent)

[`
eMath.addMany([a,b,c,...])
`](#emathaddMany)


## Description of functions

### eMath.add()
###### Params
Takes in two numbers, and returns the sum of the numbers in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.add(2, 10)
// –> 12
```








### eMath.mult()

###### Params
Takes in two numbers, and returns the product of the numbers in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.add(20, 10)
// –> 2000 
```

### eMath.divide()
###### Params
Takes in two numbers, and returns the quotient of the numbers in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.divide(2, 10)
// –> 20
```




### eMath.mod()
###### Params
Takes in two numbers, and returns the 'remainer' of the of a division problem in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.mod(6, 3)
// -> 0
```



### eMath.percent()
###### Params
Takes in two numbers, and returns the percentage X is of Y in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.percent(2, 10)
// –> 0.2
```




### eMath.addMany()
###### Params
Takes *an array* of numbers, and returns the sum of the numbers in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.divide([1, 2, 3, 100,])
// –> 106
```