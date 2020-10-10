//zadanie 1
let num1 = 5;
let num2 = 10;

if (num1 > num2) {
    console.log("liczba1 jest większa");
} else {
    console.log("liczba2 jest wieksza");
}

//zadanie 2
let num1 = 1;
let num2 = 2;
let num3 = 3;

if (num1 > num2) {
    if (num1 > num3) {
        console.log("Liczba num1 jest największa");
    } else {
        console.log("Liczba num3 jest największa");
    }
} else if (num2 > num3) {
    console.log("Liczba num2 jest największa");
} else {
    console.log("Liczba num3 jest największa");
}

//zadanie 3
for (let i = 0; i < 10; i++) {
    console.log("lubie JS");
}

//zadanie 4
let result = 0;

for (let i = 1; i <= 10; i++) {
    result += i;
}

console.log(result);

//zadanie 5

let n = 5;
for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
        console.log("liczba " + i + "parzysta");
    } else {
        console.log("liczba " + i + "nieparzysta");
    }
}

//zadanie 6

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log("i=" + i + " j=" + j);
    }
}

//Zadanie 7
console.log(0);
for (i = 1; i < 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

//zadanie 8
//przyklad A

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

//przyklad B


let star = ' *';

for (let x = 0; x < 5; x++) {
    var result = '';
    for (y = 0; y < 5 - x; y++) {
        result += ' ';
    }
    for (z = 0; z < x + 1; z++) {
        result += star;
    }
    console.log(result);
}


//przyklad C

for (let x = 0; x < 5; x++) {
    var result = '';
    for (y = 0; y < 5 - x; y++) {
        result += ' ';
    }
    for (z = 0; z < (2 * x + 1); z++) {
        result += star;
    }
    console.log(result);
}

//przykład D

for (let x = 0; x < 5; x++) {
    var result = '';
    for (let y = 0; y < x + 1; y++) {
        result += star;
    }
    for (let z = 0; z < 5 - (x + 1); z++) {
        result += (z + 1);
    }
    console.log(result);
}


//przyklad E

let star = ' *';

for (let x = 0; x < 5; x++) {
    var result = '';
    for (y = 0; y < 5 - x; y++) {
        result += ' ';
    }
    for (z = 0; z < x + 1; z++) {
        result += star;
    }
    console.log(result);
}
for (let x = 0; x < 3; x++) {
    var result = '';
    for (y = 0; y < 5; y++) {
        result += ' ';
    }
    result += star;
    console.log(result);
}