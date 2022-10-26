import a from './a.js';
import b from './b.js';
import c from './c.js';
import { exampleFunction1, exampleFunction2 } from './example-function.js';
import _ from 'lodash';

console.log("a = ", a);
console.log("b = ", b);
console.log("c = ", c);
console.log("Random number from lodash: ", _.random(0,10,false));
exampleFunction1();
exampleFunction2();
