// объединение массиов
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// function mergeArrays(arr1, arr2) {
//     return [...arr1, ...arr2]
// };
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// убираем дубликаты
// function removeDuplicats(...arg) {
//     return arg.filter((value, index) => arg.indexOf(value) === index); // берётся линейная функция, фильтрует те, у которых индекс значения соответствует индексу, так как идёт перебор данных, он цепляется за первый раз когда встретил значение и тем самым оно не равно индексу, пример:
//     // индекс 1 = 0, индес 0 - подходит в фильт, следующий индекс 1 = 0, а по списку уже = 1 индекс, не подходит.
// }
// console.log(removeDuplicats(1, 1, 1, 4, 4, 6, 87, 0)); // [1, 4, 6, 87, 0]

// сокращённый вариант
// const removeDuplicats = (...arg) => arg.filter((value, index) => arg.indexOf(value) === index);
// console.log(removeDuplicats(1, 1, 1, 4, 4, 6, 87, 0)); // [1, 4, 6, 87, 0]

// возвращает только чётные числа длинный вариант

// function getEvenNumber(arr) {
//     const arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             arr2.push(arr[i])
//         }
//     }
//     console.log(arr2);
// };
// getEvenNumber([1, 2, 4, 5, 6]);

// короткий вариант
// const getEvenNubmer = (num) => num.filter(val => val % 2 === 0);
// console.log(getEvenNubmer([1, 2, 3, 4, 5, 6]));


// принимает массив и возвращает среднее
// function avgNubmer(num) {
//     const sum = num.reduce((acc, num) => acc + num);
//     return sum / num.length;
// };
// console.log(avgNubmer([1, 2, 3, 4, 5]));

// принимает строку и возвращает строку где каждое слово с заглавной буквы
// const capitalizeFrirstLatter = (str) => str.split(' ').map(arr => arr[0].toUpperCase() + arr.slice(1)).join(' ');

// console.log(capitalizeFrirstLatter('всем притвет всем пока'));

// функция которая принимает значение и возрващает объект с двумя методами add и subtract, первый добавляет к значению, второй убавляет на переданное число

// function createCalculator(val) {
//     let result = val;
//     return {
//         add: function (num) {
//             result += num;
//         },
//         subtract: function (num) {
//             result -= num;
//         },
//         getResult: function (num) {
//             return result;
//         }
//     }
// };

// const calculator = createCalculator(10);
// calculator.add(3);
// console.log(calculator.getResult());
// calculator.subtract(4);
// console.log(calculator.getResult());

// функция, которая принимает имя и возвращает приветствие
// const createGreeting = (name) => {
//     return (`Hello, ${name} !`);
// };
// const greeting = createGreeting('Jhon');
// console.log(greeting);

// создание проверки пароля
// function createPasswordChecker(val) {
//     return function (password) {
//         return password.length === val;
//     }
// };
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('set'));


// функция, которая складывает все переданные числа
// function sumDigits(num) {
//     if (num < 10) {
//         return num;
//     }
//     return num % 10 + sumDigits(Math.floor(num / 10));
// }