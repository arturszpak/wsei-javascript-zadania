//zadanie 1

const task1Elements = document.querySelectorAll(".more-divs");
const tagArray = [];

function task1(...elements){
    elements.forEach(el => tagArray.push(el));
    console.log(tagArray);
}

task1(task1Elements);

//zadanie2

const task2Element = document.querySelector(".short-list");

function task2(list){
    //punkt1
    console.log(list.innerHTML);
    //punkt2
    console.log(list.parentNode.innerHTML);
}

task2(task2Element);