parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"c5pb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(r){if(!Number.isInteger(r))return!1;var n=r.toString();if(13!==n.length)return!1;var u=parseInt(n.substr(0,11),10);return!!e(u,parseInt(n.substr(11,1),10))&&!!t(u,parseInt(n.substr(12,1),10))};function t(r,t){return c(r)===t}function e(r,t){return a(r.toString())===t}exports.default=r;var n=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],u=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]],o=[0,2,4,6,8,1,3,5,7,9],i=[0,4,3,2,1,5,6,7,8,9];function s(r,t){for(var e=0,n=0,u=r.length;u--;)n=Number(r[u]),e+=(t=!t)?o[n]:n;return e}function a(r){return 9*s(r,!1)%10}function f(r){return Number.isInteger(r)&&(r=String(r)),"[object String]"===Object.prototype.toString.call(r)&&(r=r.split("").map(Number)),r.reverse()}function c(r){for(var t=0,e=f(r),o=0;o<e.length;o++)t=n[t][u[(o+1)%8][e[o]]];return i[t]}
},{}],"cn/r":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){if(Number.isInteger(e))return e>=1110&&e<=9999;if("string"==typeof e&&(e.startsWith("L-")&&(e=e.substr(2,e.length-2)),4===e.length)){var t=parseInt(e,10);return t>=1110&&t<=9999}return!1};exports.default=e;
},{}],"xgjO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){if("string"==typeof e){var r=e.replace(/\s/g,"").replace(/-/g,"");if(!(r.length>=6&&r.length<=8))return!1;if(e=parseInt(r),isNaN(e))return!1}return!!Number.isInteger(e)&&(e>99999&&e<=99999999)};exports.default=e;
},{}],"pDA6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(t){if(Number.isInteger(t))return 4===t.toString().length||5===t.toString().length;if("string"==typeof t){var r=t.replace(/\s/g,"");if(!e(r.substr(0,2)))return 4===r.toString().length||5===r.toString().length;var n=r.substr(2,r.length-2);if(4===n.length&&/^\d+$/.test(n))return!0}return!1};function e(t){return 2===t.length&&/^[a-z]+$/i.test(t)}exports.default=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=d(require("./validateMatricule")),a=d(require("./validateCodePostal")),t=d(require("./validateFixedPhone")),l=d(require("./validateLicensePlate"));function d(e){return e&&e.__esModule?e:{default:e}}var i={validateMatricule:e.default,validateCodePostal:a.default,validateFixedPhone:t.default,validateLicensePlate:l.default};exports.default=i;
},{"./validateMatricule":"c5pb","./validateCodePostal":"cn/r","./validateFixedPhone":"xgjO","./validateLicensePlate":"pDA6"}]},{},["Focm"], "LuxUtils")
//# sourceMappingURL=/index.umd.map