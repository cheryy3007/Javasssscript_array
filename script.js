let fruits = ["банан", "персик", "вишня", "яблоко"];

alert(`Длина массива до изменений: ${fruits.length}`);

console.log(fruits);

let confirmAction = confirm("Хотите удалить последний элемент из массива?");

if (confirmAction) {
  let removedElement = fruits.pop();
  alert(`Элемент "${removedElement}" был удалён.`);
} else {
  alert("Массив остался без изменений.");
}
alert(`Длина массива после изменений: ${fruits.length}`);

console.log(fruits.length);

