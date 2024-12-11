// // Задание № 1
// function dellayMessage(message, delay) {
//     setTimeout(() => {
//         console.log(message);
//     }, delay * 1000)
// };

// dellayMessage('Сообщение 1', 1);
// dellayMessage('Сообщение 2', 5);
// dellayMessage('Сообщение 3', 10);
// dellayMessage('Конец программы', 10);

// Задание № 2
// const tasks = [
//     { name: 'task 1', time: 1000 },
//     { name: 'task 2', time: 3000 },
//     { name: 'task 3', time: 6000 }
// ];
// const allTasks = (taskList) => {
//     taskList.forEach(task => {
//         interval = task.time;
//         setTimeout(() => {
//             console.log(task.name);
//         }, interval);

//     });
// }
// allTasks(tasks)

// Задание № 3

// function loadData(url) {
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(xhr.responseText);
//         }
//     }
//     xhr.open('GET', url, true);
// };
// loadData('https://gb.ru/')

fetch('https://jsonplaceholder.typicode.com/users')
    .then((result) => {
        if (result) {
            return result.text()
        }
        throw new Error('Ошибка')
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error('Много ошибок')
    });