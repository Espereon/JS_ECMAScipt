// // Задание № 1

// const Person = {
//     name: '',
//     age: 26,
//     gender: '',
//     introduce() {
//         console.log(`Hello, my name is ${this.name}, i'm ${this.age} years old, my gender is ${this.gender}`);
//     },
//     changeName(text) {
//         this.name = text;
//     }
// };

// Person.name = 'Jhon';
// Person.age = 26;
// Person.gender = 'male';
// Person.introduce();
// Person.changeName('Igon');
// Person.introduce();

//Задание № 2

// const Animal = {
//     name: '',
//     eat() {
//         console.log(`Животное ${this.name} кушает`);
//     }
// };
// const Dog = {
//     name: '',
//     bark() {
//         console.log(`Собака ${this.name} лает`);
//     }
// };
// Dog.eat = Animal.eat;
// Dog.name = 'Rex';
// Dog.bark();
// Dog.eat();

// Задание № 3

// const calculator = {
//     add(x, y) {
//         return x + y
//     },
//     subtract(x, y) {
//         return x - y
//     },
//     myltiply(x, y) {
//         return x * y
//     }
// };
// console.log(calculator.add.call(null, 5, 3));
// console.log(calculator.subtract.apply(null, [5, 3]));

// Задание № 4
// class Person {
//     constructor(name, age) {
//         this.name = name,
//             this.age = age
//     };
//     introduce() {
//         console.log(`Hello, my name ${this.name}, i'm ${this.age} old`);
//     }
// };

// const person = new Person('Jhon', 25);
// setTimeout(person.introduce, 5000);

// // Задание № 5

// class BankAccount {
//     static bankName = 'Sberbank';
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }
//     deposit(amount) {
//         return console.log(`Deposit ${amount} into ${this.accountNumber} account number. New balance = ${this.balance += amount}`);
//     }
//     withdraw(amount) {
//         if (amount > this.balance) {
//             console.log(`Недостаточно средств на аккаунте ${this.accountNumber}`);
//         } else {
//             return console.log(`Withdraw ${amount} from ${this.accountNumber} account number. New balance = ${this.balance -= amount}`);
//         }
//     }
// };

// const account1 = new BankAccount('123456789', 1000);
// account1.deposit(500);
// account1.withdraw(500);
// account1.withdraw(2000);