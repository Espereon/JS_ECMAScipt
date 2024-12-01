const studentsGroup1PracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
];
const studentsGroup2PracticeTime = [
    {
        firstName: "Mankov",
        practiceTime: 73
    },
    {
        firstName: "Kistin",
        practiceTime: 133
    },
    {
        firstName: "Kotlyarov",
        practiceTime: 140
    },
    {
        firstName: "Peskov",
        practiceTime: 10
    },
];

// arguments - переменная доступная внутри каждой функции, которая содержит в себе все аргументы, переданные в функцию. Является псевдомассивом.
// Так как arguments является псевдомассивом, мы не можем применять к нему новые методы массивов такие как forEach или reduce, поэтому будем итерировать по старинке.
function findMax() {
    const values = arguments;
    let maxValue = -Infinity;
    for (let index = 0; index < values.length; index++) {
        if (values[index] > maxValue) maxValue = values[index];
    }
    return maxValue;
};
// Мы должны передавать в нашу функции только числа, а в наших массивах содержаться объекты, поэтому сначала создадим массивы только со значениями времени отработанными студентами.
const group1PracticeTime = studentsGroup1PracticeTime.map((student) => student.practiceTime);
console.log(group1PracticeTime);
const group2PracticeTime = studentsGroup2PracticeTime.map((student) => student.practiceTime);
console.log(group2PracticeTime);


const maxTimeFromGroup1 = findMax(...group1PracticeTime);
console.log(maxTimeFromGroup1); // 160
const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2); // 140

//...group1PracticeTime - вытянет из ассива все элементы и передаст их в функцию как отдельные переменные. 
// Это аналогично страшной и неудобной записи:
const maxTimeFromGroup1p2 = findMax(group1PracticeTime[0], group1PracticeTime[1], group1PracticeTime[2], group1PracticeTime[3], group1PracticeTime[4])
console.log(maxTimeFromGroup1p2); // 160
const maxTimeFromGroup2p2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2p2); // 140

// Давайте также найдем максимально отработанное время среди двух групп. Мы можем сделать это передав данные обоих массивов в функцию таким образом:
findMax(...group1PracticeTime, ...group2PracticeTime);

// А можем объединить два массива в один - это очень частая операция и оператор расширения (spread) очень в этом помогает.
const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
console.log(bothGroupsTime);

// Для объединения двух массивов нам нужно вытащить их элементы в один общий массив, поэтому мы объявляем новый массив, а в качестве его элементов делаем расширение элементов первого и второго массива. Также мы могли бы добавить в него и другие элементы.
const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160
