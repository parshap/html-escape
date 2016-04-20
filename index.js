"use strict";

/* From Twitter's Hogan.js */

var rAmp = /&/g;
var rLt = /</g;
var rGt = />/g;
var rApos =/\'/g;
var rQuot = /\"/g;
var hChars =/[&<>\"\']/;

module.exports = function(str) {
  if (str == null) {
    return str;
  }

  if (typeof str !== "string") {
    str = String(str);
  }

  if (hChars.test(String(str))) {
    return str
      .replace(rAmp,'&amp;')
      .replace(rLt,'&lt;')
      .replace(rGt,'&gt;')
      .replace(rApos,'&#39;')
      .replace(rQuot, '&quot;');
  }
  else {
    return str;
  }
};
