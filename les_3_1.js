function funTest (somTh) {
    for (let key in somTh){
        if (somTh.hasOwnProperty(key)) {
           console.log (key, somTh[key]) 
        }
    }
}

// остальное для проверки
const person = {

 city: "Moscow"

}

// создаем объект с прототипом

const student = Object.create(person);

// добавляем собственное свойство объекту student

student.ownCity = "Piter";

funTest (person)
funTest (student)