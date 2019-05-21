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
`](#eMathaddab)

[`
eMath.subtract(a,b)
`](#eMathsubtractab)

[`
eMath.mult(a,b)
`](#emathmultab)

[`
eMath.divide(a,b)
`](#emathdivideab)

[`
eMath.mod(a,b)
`](#emathmodab)

[`
eMath.percent(a,b)
`](#emathpercentab)

[`
eMath.addMany([a,b,c,...])
`](#emathaddManya,b,c,)

[`
eMath.fileSize(['url1','url2',...], max?)
`](#emathfilesize)


## Description of functions

### eMath.add(a,b)
###### Params
Takes in two numbers, and returns the sum of the numbers in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.add(2, 10)
// –> 12
```
### eMath.subtract(a,b)
###### Params
Takes in two numbers, and returns the differance of the numbers in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.subtract(2, 10)
// –> -8
```







### eMath.mult(a,b)

###### Params
Takes in two numbers, and returns the product of the numbers in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.add(20, 10)
// –> 2000 
```

### eMath.divide(a,b)
###### Params
Takes in two numbers, and returns the quotient of the numbers in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.divide(2, 10)
// –> 20
```




### eMath.mod(a,b)
###### Params
Takes in two numbers, and returns the 'remainer' of the of a division problem in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.mod(6, 3)
// -> 0
```



### eMath.percent(a,b)
###### Params
Takes in two numbers, and returns the percentage X is of Y in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.percent(2, 10)
// –> 0.2
```




### eMath.addMany([a,b,c,...])
###### Params
Takes *an array* of numbers, and returns the sum of the numbers in the type of a number.
###### Example
```js
const eMath = require('easy-math-module')

eMath.divide([1, 2, 3, 100,])
// –> 106
```


### eMath.fileSize(['url1' , 'url2', ...], max?)
###### Params
Takes an array of file urls, and returns the sum of the bytes in the array. Threre is also an optional second param, the max number of bytes. If the second optional param is used the function returns the percent of the max bytes used by the the files
###### Example with the second param
```js
const eMath = require('easy-math-module')
// In this instance the opional second param IS used
// myfile.txt and anotherfile.txt are both 20 bytes
eMath.fileSize(['./myfile.txt','anotherfile.txt'], 200)
// –> 20
// the output type is a number	
```

###### Example without the second param
```js
const eMath = require('easy-math-module')
// In this instance the opional second param is NOT used
// myfile.txt and anotherfile.txt are both 20 bytes
eMath.fileSize(['./myfile.txt','anotherfile.txt'])
// –> 40
// the output type is a number
```
Find a Bug?
[Submit an issue](https://github.com/Gninoskcaj/easy-math-module/issues/new)