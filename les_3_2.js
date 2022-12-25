function funTest (somTh, somText) {
    return (somText in somTh);
}

// остальное для проверки
const person = {

 city: "Moscow"

}

// создаем объект с прототипом

const student = Object.create(person);

// добавляем собственное свойство объекту student

student.ownCity = "Piter";


console.log (funTest (student, "Piter"));
console.log (funTest (student, "ownCity"));
