/* Напишите код, который выведет каждый элемент списка в консоль :
 1. Используйте цикл for..of */

const listItems = document.querySelectorAll(`#ulId>li`);
for (const li of listItems) {
  console.log(li);
}

/* 2. Вывести общее кол-во элементов в консоль */

const amountElems = listItems.length;
console.log(`The total number of elements of 'li' is ${amountElems}.`);

/* 3. Вытянуть текст из тегов li и записать текст содержащийся в каждом
   элементе в массив — вывести этот массив в консоль */

const arrOfValuesLi = Array.from(
  listItems,
  // применил Array.from(obj[, mapFn]), где mapFn - (li => li.textContent) - это
  // функция, применяемая к каждому элементу массива, для отображения текста
  // внутри тэга `li` перед добавлением в массив.
  (li) => li.textContent
);

const arrOfValuesLi1 = [];
const arrOfValuesLi2 = [];

for (li of listItems) {
  arrOfValuesLi1.push(li.innerHTML);
  arrOfValuesLi2.push(li.textContent);
}

console.log(arrOfValuesLi);
console.log(arrOfValuesLi1);
console.log(arrOfValuesLi2);
