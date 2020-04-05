# lux-utils

JS library to validate and format common Luxembourgish administrative data.

:bangbang: [Demo](https://codesandbox.io/s/92w1x0q3vw) :bangbang:

[![Travis](https://img.shields.io/travis/com/stefanotron/lux-utils.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/v/lux-utils.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Features :boom:

- **_Luhn and Verhoeff checks for social secuirity numbers_**

- **_validate phone numbers with prefix_**

- **_validate license plates_**

- **_validate postal codes_**

- **_0 dependencies_**

- **_lightweight 1.4kB (minified + gzipped)_**

## Installation

Add the latest version of `lux-utils` to your package.json:

```
npm install lux-utils --save
```

or

```
yarn add lux-utils
```

# Usage

First import the lib

```
import luxUtils from "lux-utils";
```

# Example

To validate a social security number:

```
let isMatriculeValid = luxUtils.validateMatricule(1893120105732); //returns true
```

Check out the example in React here [here](https://codesandbox.io/s/92w1x0q3vw)

# Doc

Checkout the doc [here](https://stefanotron.github.io/lux-utils/latest/)

# TODOs

- [ ] validate an address
- [ ] id number
- [ ] passport number
- [ ] formatter for phone numbers (mobile and fixed)
- [ ] formatter for license plate
- [ ] formatter for postal code
