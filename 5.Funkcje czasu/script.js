//zadanie1

let visitCounter = 1;

let interval = setInterval(function () {

    console.log("czesc po raz " + visitCounter++);
    if (visitCounter > 15) {
        clearInterval(interval);
    }
}, 3000);

//zadanie 2

const names = ["Artur", "Sebastian", "Monika", "Natalia", "Lena"];

setTimeout(function () {
    console.log(names);
}, 2000);

counter = 0;

let timer = setInterval(function () {
    console.log(names[counter]);
    counter++;
    if (counter === names.length) {
        clearInterval(timer);
    }
}, 3000);