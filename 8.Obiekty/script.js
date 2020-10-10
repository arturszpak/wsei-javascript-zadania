//zadanie1
let car = {
    model: "Audi RS7",
    year: 2015,
    color: "red",
    changeName(newName) {
        car.model = newName;
    }
}

console.log(car.color);
console.log(car.made);
console.log(car.model);
console.log(car.year);

//zadanie2

car.changeName("Volkswagen Polo");
console.log(car.model);

//zadanie3

const numArr = {
    sum: 0,
    sumArr(arr) {
        return numArr.sum = arr.reduce((acc, currentVal) => acc += currentVal, 0);
    }
}

numArr.sumArr([5, 88, 1, 33, 7, 11]);
console.log(numArr.sum);

//zadanie4

let car = {
    name: "BMW",
    age: 12,
    color: "silver",
}

for (const prop in car) {
    console.log(`${prop}: ${car[prop]}`);
}


//zadanie5

let car = {
    name: "BMW",
    age: 12,
    color: "silver",
    engine: {
        type: "diesel",
        capacity: 1.8,
    }
}

console.log(car.engine.type);
console.log(car.engine.capacity);

//zadanie6


car.type = "combi";
car.engineSound = function () {
    return "łututututu";
}

console.log(car.type);
console.log(car.engineSound());