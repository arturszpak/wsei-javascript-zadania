//Zadanie 1
// /*1*/ console.log(document.getElementById('buz').parentNode);

// /*2*/ console.log(document.getElementById('baz').previousElementSibling);

// /*3*/ console.log(document.getElementById('foo').children);

// /*4*/ console.log(document.getElementById('foo').parentNode);

// /*5*/ console.log(document.getElementById('foo').firstElementChild);

// /*6*/
// let n = document.querySelector("#foo").childElementCount;
// n%2==0 ? n=Math.floor(n/=2) : n=Math.floor(n/2+1);
// console.log(document.querySelector(`#foo div:nth-child(${n})`));

// // Zadanie 2
// const ex2 = document.getElementById("ex2");

// function showDivColor(parent) {
//     parent.addEventListener("click", function () {
//         // A wystarczyłoby dopisać klase czy ID :/
//         const txt = document.querySelector("#ex2").children[0].children[0].children[0].children[1].children[0].children[0].textContent;
//         console.log(txt);
//     });
// }

// showDivColor(ex2);

// //Zadanie 3
// const ex3 = document.querySelectorAll("#ex3 button");
// ex3.forEach(btn => {
//     btn.addEventListener("click", function () {
//         if (btn.nextElementSibling.style.display === "none") btn.nextElementSibling.style.display = 'inline';
//         else btn.nextElementSibling.style.display = 'none';

//         //Zadanie4
//         const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//         btn.parentNode.style.backgroundColor = randomColor;

//     })
// })

//Zadanie 5

const rectangles = document.querySelectorAll("#ex5 div");
const liElements = [...document.querySelectorAll("#ex5 > ul > li")];
rectangles.forEach(rec => {
    rec.addEventListener("mouseover", function () {
        const bgColor = rec.style.backgroundColor;

        //punkt1 pierwszy element
        // liElements[0].style.backgroundColor = bgColor;

        //punkt2 ostatni element
        // liElements[liElements.length - 1].style.backgroundColor = bgColor;

        //punkt3 parzyste elementy
        // const evenElements = liElements.filter(function (element, index, array) {
        //     return (index % 2 === 1);
        // });
        // evenElements.forEach(el => el.style.backgroundColor = bgColor);

        //punkt4 wszystkie elementy
        // liElements.forEach(el => el.style.backgroundColor = bgColor);

        //punkt5 nie elementy, a cala lista
        // document.querySelector("#ex5 > ul").style.backgroundColor = bgColor;

    });
})


//Zadanie 6
// const ex6 = document.querySelector("#ex6");

//punkt1
// const thirdChild = ex6.children[0].children[0].children[0];
// console.log(thirdChild);

//punkt2
// const comb2 = ex6.children[0].parentNode.children[0].nextSibling.parentNode;
// console.log(comb2);

//punkt3
// const comb3 = ex6.parentNode.children[0].parentNode.children[1].children[0].children[0].children[0];
// console.log(comb3);