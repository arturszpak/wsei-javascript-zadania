//zadanie 1
function foo() {
    console.log("Udało się");
}

foo();

//zadanie2

function showNumber(num) {
    console.log(num);
}

showNumber(77);

//zadanie 3

const numbers = [1, 3, 3, 4, 5, 6];

function showNumbers(arr) {
    console.log(arr);
}

showNumbers(numbers);


//zadanie 4


function showString(str) {
    counter = 0;
    let interval = setInterval(function () {
        console.log(str);
        counter++;
        if (counter === 5) {
            clearInterval(interval);
            console.log("Koniec");
        }
    }, 200)
}

showString("helloworld");