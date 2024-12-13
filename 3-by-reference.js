'use strict';
/*
З сигнатурою `inc(num: Num)`, де `Num` є об'єктом з полем `n`,
щоб функція змінила поле вихідного об'єкта, переданого за посиланням,
*/
const inc = (obj) => {
  if (typeof obj === 'object') obj.n++;
};

/*
const counterObj = { n: 7 };
inc(counterObj);
console.dir(counterObj);
*/
module.exports = { inc };
