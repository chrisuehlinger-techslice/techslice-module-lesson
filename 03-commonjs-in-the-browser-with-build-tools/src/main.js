var a = require('./a');
var b = require('./b');
var c = require('./c');
var { exampleFunction1, exampleFunction2 } = require('./example-function');
var _ = require('lodash');

console.log("a = ", a);
console.log("b = ", b);
console.log("c = ", c);
console.log("Random number from lodash: ", _.random(0,10,false));
exampleFunction1();
exampleFunction2();

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
