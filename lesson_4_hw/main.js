// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.


async function getUserData(ID) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  if (response.status != 200) {
    console.log(`Error ${response.status}: ${response.statusText}`);
  } else {
    const user = users.find((el) => el.id == ID);
    console.log(user === undefined ? "Пользователь не найден" : user);
  }
}
getUserData(10);
getUserData(2000000);

// Отправка данных на сервер

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента
// и использует fetch для отправки этих данных на удаленный сервер для сохранения.
// Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.


async function saveUserData(user, url) {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    console.log(response.status);
    throw new Error("Что-то пошло не так: " + response.status);
  } else {
    console.log(response.status);
  }
}
const user = {
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};
const url1 = "https://jsonplaceholder.typicode.com/us";
const url2 = "https://jsonplaceholder.typicode.com/users";

saveUserData(user, url1)
  .then(() => {
    console.log("User data saved successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

saveUserData(user, url2)
  .then(() => {
    console.log("User data saved successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

//   Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время
//   задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

//   // Пример использования функции
//   changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

function changeStyleDelayed(elName, time) {
  setTimeout(() => {
    elName.style.backgroundColor = "blue";
  }, time);
}
const buttonEl = document.querySelector(".button");
buttonEl.addEventListener("click", function () {
  changeStyleDelayed(buttonEl, 2000);
});
