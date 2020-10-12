//zadanie1
const numbers = [1, 2, 3, 4];
console.log(numbers);

//zadanie2

const arr = ["foo", "bbb", 2, 17, "str", 12];

//punkt1
console.log(arr[0]);
console.log(arr[1]);

//punkt2
console.log(arr[arr.length - 1]);

//punkt3
arr.forEach(a => console.log(a));

//punkt4
arr.forEach((a, i) => {
    if (i % 2 == 0) console.log(a);
})

//punkt5
arr.forEach(a => {
    if (typeof a === "string") console.log(a);
})

//punkt6
arr.forEach(a => {
    if (typeof a === "number") console.log(a);
})

//ZADANIE3
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//punkt1 suma
let sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);

//punkt2 roznica
let sum = numbers.reduce((a, b) => a - b, 0);
console.log(sum);

//punkt3 srednia
let avg = (numbers.reduce((a, b) => (a + b), 0)) / numbers.length;
console.log(avg);

//punkt4 parzyste
console.log(numbers.filter(n => n % 2 == 0));
//punkt5 nieparzyste
console.log(numbers.filter(n => n % 2 == 1));

//punkt6 max
console.log(Math.max(...numbers));

//punkt7 min
console.log(Math.min(...numbers));

//punkt8 od tyłu
console.log(numbers.reverse());

//zadanie4
function sumArr(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(sumArr(numbers));

//zadanie5
function sumArr2(arr) {
    let avg = (numbers.reduce((a, b) => a + b, 0)) / numbers.length;
    return arr.map(n => n * avg);
}
console.log(sumArr2(numbers));

//zadanie6 srednia liczb parzystych
function evenAvg(arr) {
    const evenNums = arr.filter(n => n % 2 == 0);
    console.log((evenNums.reduce((acc, currentVal) => {
        return acc + currentVal;
    }, 0)) / evenNums.length);
}
evenAvg(numbers);

//zadanie7

const nums = [2, 7, 5, 34, 1, 65];
function compareNumbers(a, b) {
    return a - b;
}
console.log(nums.sort(compareNumbers));


//zadanie8
//jeśli dobrze zrozumiałem treść, to
//mamy utworzyć nową tablicą gdzie kazdy poszczegolny index bedzię sumą indexow z dwoch poprzednich tablic 


const arr1 = [1, 5, 8, 44, 56, 39];
const arr2 = [9, 0, 21, 78, 8, 4];
const newArr = [];

function addIndexes(arr1, arr2) {
    arr1.forEach((num1, i) => {
        newArr.push(num1 + arr2[i]);
    });
    return newArr;
}

console.log(addIndexes(arr1, arr2));

//zadanie 9

function excludeGivenElementFromArray(arr, element) {
    let el = arr.indexOf(element);
    arr.splice(el, 1);
    return arr;
}

console.log(excludeGivenElementFromArray(nums, nums[2]));

//zadanie 10
const numbers2 = [-2, 7, -5, -34, -1, 65];

function changeElement(arr) {
    return arr.map(n => n * -1);
}

console.log(changeElement(numbers2));