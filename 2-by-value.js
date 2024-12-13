'use strict';
/*
Підготуйте дві реалізації функції inc:
З сигнатурою inc(n: number): number
приклад виклику: const a = 5; const b = inc(a); console.dir({a, b});
*/
const inc = (v) => ++v;

/*
const a = 5;
const b = inc(a);
console.dir({a, b});
*/
module.exports = { inc };
