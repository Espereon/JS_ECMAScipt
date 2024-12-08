// // Задание № 1
// const MusicSeries = {
//     model: "music series",
//     power: 200,
//     batterySize: 2100,
//     boxSize: 0.5,
//     workTime: 45,
//     startWipe: function () {
//         console.log('I am the method of MusicSeries');
//         console.log('I am starting to wipe the floor...');
//     },
// };
// const Blues = {
//     model: "blues serries",
//     power: 250,
//     batterySize: 2100,
//     boxSize: 0.5,
//     workTime: 45,
// };

// Object.setPrototypeOf(Blues, MusicSeries);

// function getPrototypeChain(obj) {
//     const prototypeChain = [];

//     let currentObj = obj;
//     while (currentObj !== null) {
//         prototypeChain.push(currentObj);
//         currentObj = Object.getPrototypeOf(currentObj);
//     }
//     return prototypeChain;
// }

// const prototypeChain = getPrototypeChain(Blues);
// console.log(prototypeChain);

// Задание № 2

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`Животное ${this.name} издаёт звук`);
    }
};

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`Собака ${this.breed} принесла мяч`);
    }
};


const animal1 = new Animal('Животное');
animal1.speak();
const dog1 = new Dog('Бобик', 'Дворняжка');
dog1.speak();
console.log(dog1.breed);
dog1.fetch();

