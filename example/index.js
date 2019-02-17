import YourLibrary from '../src/index.js';

const foo = YourLibrary.validateMatricule(1893120105732);

document.write(foo);
console.log("1893 12 01 057 32",YourLibrary.validateMatricule(1893120105732));
console.log("1987 11 08 032 76",YourLibrary.validateMatricule(1987110803276));
console.log("1988 12 30 480 83",YourLibrary.validateMatricule(1988123048083));
console.log("1988 12 30 480 11 (false)",YourLibrary.validateMatricule(1988123048011));
