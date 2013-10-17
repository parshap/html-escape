# html-escape

# html-escape

Escape scape a string to be safe for use in HTML. [All
five](http://www.w3.org/International/questions/qa-escapes#use) reserved
characters (`&<>'"`) are escaped.

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
