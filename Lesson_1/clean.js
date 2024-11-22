const student = {
    first: 'Ivan',
    age: 21
};

const getYearOfBrith = (currentYear) => {
    return currentYear - student.age;
}
console.log(getYearOfBrith(2030));


const addField = (object, key, value) => {
    object[key] = value;
    return object;
};
const updatedStudent = addField(student, 'lastName', 'Belkin');
console.log(student);
console.log(updatedStudent);

const addFiledPureVersion = (object, key, value) => {
    return {
        ...object, [key]: value
    }
};
const updateStudentPur = addFiledPureVersion(student, 'practicetime', 148);
console.log(student);
console.log(updateStudentPur);