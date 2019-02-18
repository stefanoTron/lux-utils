// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"c5pb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @memberof LuxUtils
 * @function validateMatricule
 * @description Returns `true` if the matricule is valid
 * @param {integer} matriculeToValidate matricule to validate
 * @returns {boolean} `true` or `false`

 *
 * @example
 * // validate a matricule
 *  let isValid = LuxUtils.validateMatricule(1893120105732); //true;
 *
 */
var _default = function _default(matriculeToValidate) {
  if (!Number.isInteger(matriculeToValidate)) return false;
  var matriculeToValidateString = matriculeToValidate.toString();
  if (matriculeToValidateString.length !== 13) return false;
  var strippedMatricule = parseInt(matriculeToValidateString.substr(0, 11), 10);
  var luhn = parseInt(matriculeToValidateString.substr(11, 1), 10);
  if (!validateLuhn(strippedMatricule, luhn)) return false;
  var verhoeff = parseInt(matriculeToValidateString.substr(12, 1), 10);
  if (!validateVerhoeff(strippedMatricule, verhoeff)) return false;
  return true;
};

exports.default = _default;

function validateVerhoeff(strippedMatricule, verhoeff) {
  return generate(strippedMatricule) === verhoeff;
}

function validateLuhn(strippedMatricule, luhn) {
  return calculateLuhn(strippedMatricule.toString()) === luhn;
}

var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]]; // permutation table p

var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
var computed = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]; // inverse table inv

var inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

function sumLuhn(digits, even) {
  var sum = 0,
      digit = 0,
      i = digits.length;

  while (i--) {
    digit = Number(digits[i]);
    sum += (even = !even) ? computed[digit] : digit;
  }

  return sum;
}

function calculateLuhn(digits) {
  var sum = sumLuhn(digits, false);
  return sum * 9 % 10;
} // converts string or number to an array and inverts it


function invArray(array) {
  if (Number.isInteger(array)
  /* Object.prototype.toString.call(array) === '[object Number]' */
  ) {
      array = String(array);
    }

  if (Object.prototype.toString.call(array) === '[object String]') {
    array = array.split('').map(Number);
  }

  return array.reverse();
} // generates checksum


function generate(array) {
  var c = 0;
  var invertedArray = invArray(array);

  for (var i = 0; i < invertedArray.length; i++) {
    c = d[c][p[(i + 1) % 8][invertedArray[i]]];
  }

  return inv[c];
}
},{}],"cn/r":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @memberof LuxUtils
 * @function validateCodePostal
 * @description Returns `true` if the given postal code is valid
 * @param {(string|integer)}  codePostalToValidate  postal code to validate. Can be a `string` or a `integer`
 * @returns {boolean} `true` or `false`

 *
 * @example
 * // validate a postal code
 *  let isValid = LuxUtils.validateCodePostal(4402); //true;
 *  let isValid2 = LuxUtils.validateCodePostal("L-4402"); //true;
 *  let isValid3 = LuxUtils.validateCodePostal("0404"); //false;
 */
var _default = function _default(codePostalToValidate) {
  //format: 4402
  if (Number.isInteger(codePostalToValidate)) {
    return codePostalToValidate >= 1110 && codePostalToValidate <= 9999;
  }

  if (typeof codePostalToValidate === "string") {
    //format: L-4402 as a string
    if (codePostalToValidate.startsWith("L-")) {
      codePostalToValidate = codePostalToValidate.substr(2, codePostalToValidate.length - 2);
    } //format: 4402 as a string


    if (codePostalToValidate.length === 4) {
      var parsedCP = parseInt(codePostalToValidate, 10);
      return parsedCP >= 1110 && parsedCP <= 9999;
    }
  }

  return false;
};

exports.default = _default;
},{}],"xgjO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @memberof LuxUtils
 * @function validateFixedPhone
 * @description Returns `true` if the fixed phone number is valid
 * @param {(string|integer)}  fixedPhoneNumber  fixed phone number to validate. Can be a `string` or a `integer`
 * @returns {boolean} `true` or `false`

 *
 * @example
 * // validate a fixed phone number
 *  let isValid = LuxUtils.validateFixedPhone(420288); //true;
 *  let isValid2 = LuxUtils.validateFixedPhone("44 12 34 22"); //true;
 *  let isValid3 = LuxUtils.validateFixedPhone("4444"); //false;
 */
var _default = function _default(fixedPhoneNumber) {
  if (typeof fixedPhoneNumber === 'string') {
    // format: 440288 as a string
    var strippedFixedPhoneNumber = fixedPhoneNumber.replace(/\s/g, '').replace(/-/g, '');

    if (strippedFixedPhoneNumber.length >= 6 && strippedFixedPhoneNumber.length <= 8) {
      fixedPhoneNumber = parseInt(strippedFixedPhoneNumber);

      if (isNaN(fixedPhoneNumber)) {
        return false;
      }
    } else {
      return false;
    }
  } // format: 440288


  if (Number.isInteger(fixedPhoneNumber)) {
    return fixedPhoneNumber > 99999 && fixedPhoneNumber <= 99999999;
  }

  return false;
};

exports.default = _default;
},{}],"pDA6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @memberof LuxUtils
 * @function validateLicensePlate
 * @description Returns `true` if the given postal code is valid
 * @param {(string|integer)}  licensePlateToValidate  postal code to validate. Can be a `string` or a `integer`
 * @returns {boolean} `true` or `false`

 *
 * @example
 * // validate a postal code
 *  let isValid = LuxUtils.validateLicensePlate(4402); //true;
 *  let isValid2 = LuxUtils.validateLicensePlate("L-4402"); //true;
 *  let isValid3 = LuxUtils.validateLicensePlate("0404"); //false;
 */
var _default = function _default(licensePlateToValidate) {
  // format: custom plate - 1111 or 11111
  if (Number.isInteger(licensePlateToValidate)) {
    return licensePlateToValidate.toString().length === 4 || licensePlateToValidate.toString().length === 5;
  } // format: LL 22
  // format: LL 1234


  if (typeof licensePlateToValidate === 'string') {
    var strippedLicensePlateToValidate = licensePlateToValidate.replace(/\s/g, '');
    var twoFirstLetters = strippedLicensePlateToValidate.substr(0, 2);

    if (isTwoLetters(twoFirstLetters)) {
      var rest = strippedLicensePlateToValidate.substr(2, strippedLicensePlateToValidate.length - 2);

      if (rest.length === 4 && /^\d+$/.test(rest)) {
        return true;
      }
    } else {
      // custom plate
      return strippedLicensePlateToValidate.toString().length === 4 || strippedLicensePlateToValidate.toString().length === 5;
    }
  }

  return false;
};

exports.default = _default;

function isTwoLetters(str) {
  var regex = /^[a-z]+$/i;
  return str.length === 2 && regex.test(str);
}
},{}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validateMatricule = _interopRequireDefault(require("./validateMatricule"));

var _validateCodePostal = _interopRequireDefault(require("./validateCodePostal"));

var _validateFixedPhone = _interopRequireDefault(require("./validateFixedPhone"));

var _validateLicensePlate = _interopRequireDefault(require("./validateLicensePlate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class LuxUtils
 * @description JS library to validate and format common Luxembourgish administrative data.
 */
var _default = {
  /**
     * @see modules/validateMatricule
     */
  validateMatricule: _validateMatricule.default,

  /**
     * @see modules/validateCodePostal
     */
  validateCodePostal: _validateCodePostal.default,

  /**
     * @see modules/validateFixedPhone
     */
  validateFixedPhone: _validateFixedPhone.default,

  /**
     * @see modules/validateLicensePlate
     */
  validateLicensePlate: _validateLicensePlate.default
};
exports.default = _default;
},{"./validateMatricule":"c5pb","./validateCodePostal":"cn/r","./validateFixedPhone":"xgjO","./validateLicensePlate":"pDA6"}]},{},["Focm"], null)