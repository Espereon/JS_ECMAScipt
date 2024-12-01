const student = {
    first: 'Ivan',
    age: 21
};
// Функция вычисления года рождения. Принимает текущий год, и вычисляет год рождения студента используя глобальные данные. Это функция с побочными эффектами. Она сильно зависит от глобальной переменной student.

const getYearOfBrith = (currentYear) => {
    return currentYear - student.age;
};
console.log(getYearOfBrith(2021)); // 2000
student.age = 25;
console.log(getYearOfBrith(2021)); // 1996 - Мы вызывали функцию дважды с одним и тем же параметром, но получили разный результат. Это значит что мы не можем точно знать что вернет функция в тот или иной момент работы программы, и мы не можем гарантировать что код будет выполняться верно.

// Чистая версия функции. Берет данные только из своих аргументов.
const getYearOfBithPureVersion = (age, currentYear) => {
    return currentYear - age;
};
console.log(getYearOfBithPureVersion(22, 2024));

// Более сложный пример с мутацией (побочными эффектами), но более частый на практике.
// Функция добавления нового ключа в объект. Принимает исходный объект, имя ключа, и значение, которое надо добавить.
// const addField = (object, key, value) => {
//     object[key] = value;
//     return object;
// };
// const updatedStudent = addField(student, 'lastName', 'Strelkin');
// console.log(student); // {firstName: "Ivan", age: 25, lastName:"Belkin"} 
// console.log(updatedStudent); // {firstName: "Ivan", age: 25, lastName: "Belkin"}

// Чистый вариант функции - нам нужно создать новый объект внутри функции для изменения и возврата.

const addFieldPure = (object, key, value) => {
    return {
        ...object, [key]: value
    }
};
const updateName = addFieldPure(student, 'lastname', 'Sidorov');
console.log(student);
console.log(updateName);

// const addFiledPureVersion = (object, key, value) => {
//     return {
//         ...object, [key]: value
//     }
// };
// const updateStudentPur = addFiledPureVersion(student, 'practicetime', 148);
// console.log(student);
// console.log(updateStudentPur);