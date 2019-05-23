# How to use `eMath.fileSize()`

```js
const eMath = require('easy-math-module')
// In this instance the opional second param IS used
// myfile.txt and anotherfile.txt are both 1 gegabyte each
eMath.fileSize(['./myfile.txt','anotherfile.txt'], '10GB')
// –> 20
// the output type is a number	
```

###### Params 
`eMath.fileSize()` Takes an array of file urls. There is also an optional second param, the max number of bytes as a string like this `'2GB'`.

###### Returns 
`eMath.fileSize()` Returns the sum of the bytes of the files in the array.  If the second optional param is used the function returns the percent of the max bytes used by the the files

###### Examples
**Example without the second param**

```js
const eMath = require('easy-math-module')
// In this instance the opional second param is NOT used
// myfile.txt and anotherfile.txt are both 20 bytes
eMath.fileSize(['./myfile.txt','anotherfile.txt'])
// –> 40
// the output type is a number
```

**Example with the second param**
```js
const eMath = require('easy-math-module')
// In this instance the opional second param IS used
// myfile.txt and anotherfile.txt are both 1 gegabyte each
eMath.fileSize(['./myfile.txt','anotherfile.txt'], '10GB')
// –> 20
// the output type is a number	
```

Find a Bug?
[Submit an issue](https://github.com/Gninoskcaj/easy-math-module/issues/new/choose)