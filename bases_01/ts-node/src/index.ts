import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';

// printObject(123);
// printObject([1,2,3]);
// printObject(new Date());
// printObject('Hello world');
// printObject({ a:1, b:2, c:2 });

const greet = 'Hola Mundo';

console.log(genericFunction(3.1416432543543).toFixed(2));
// console.log(genericFunctionArrow([1,2,3]).toFixed(2));
// console.log(genericFunctionArrow(new Date()).toFixed(2));
// console.log(genericFunctionArrow(greet).toFixed(2));