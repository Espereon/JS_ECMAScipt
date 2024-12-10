const Student = {
    name: 'Slava',
    surname: 'Belkin',
    age: 20,
    practice: {
        place: 'IKGT',
        hours: 47,
    }
};
console.log(JSON.stringify(Student, null, 4));