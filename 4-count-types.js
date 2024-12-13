'use strict';
/*
Підрахунок елементів різних типів у масиві.
- Створіть вихідний масив, що містить значення різних типів, як
елементів, наприклад: `[true, 'hello', 5, 12, -200, false, false, 'word']`
але бажано більш довгий та різноманітний.
- Створіть об'єкт-колекцію (хеш) з іменами типів у вигляді ключів та `0` як
значення, наприклад: `{ number: 0, string: 0, boolean: 0 }`
- Пройдіться по масиву циклом `for..of` і для кожного елемента масиву,
збільшуйте відповідне значення в об'єкті-колекції.
- Змініть приклад: видаліть усі ключі з початкової колекції та додайте їх
динамічно у циклі.
*/

const countTypesInArray = (arr) => {
  //const counters = { boolean: 0, number: 0, string: 0 };
  const counters = {};
  for (const element of arr) {
    const type = typeof element;
    const count = counters[type] || 0;
    counters[type] = count + 1;
  }
  return counters;
};

const testArray =
[ 1, true, 2, 3, true, 'hello', 'goodby',
  -4, -5, -666, false, 'go go', false, 777.777,
  '', '', '', '',
  true, false, true ];

console.dir(countTypesInArray(testArray));


module.exports = { countTypesInArray };
