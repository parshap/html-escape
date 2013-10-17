# html-escape

Escape a string to be safe for use in HTML by replacing [all
five](http://www.w3.org/International/questions/qa-escapes#use) reserved
characters (`&<>'"`) with their respective entity.

# Example

```js
var escape = require("html-escape");

var xss = "Hello <script>while(1);</script> world!";

// Produce html that could be safely used
console.log("<p>" + escape(xss) + "</p>");
```

# Installation 

```
npm install html-escape
```
