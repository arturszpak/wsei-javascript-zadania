const root = document.getElementById("root");

//zadanie1
// const div = document.createElement("div");
// div.textContent = "To jest nowy element";
// root.appendChild(div);

//zadanie 2

const favFruits = ['apple', 'banana', 'mango', 'orange', 'pineapple', 'strawberry'];
// function makeList(list){
//     const ol = document.createElement("ol");
//     // root.appendChild(ol);
//     list.forEach(el =>{
//         const li = document.createElement("li");
//         li.textContent = el;
//         ol.appendChild(li);
//     })
//     return ol;  
// }
// root.appendChild(makeList(favFruits));


//zadanie 3
//nie określony event, dlatego co drugi element usunie się po kliknieciu 'f'
// document.addEventListener("keydown", function(e){
//     if(e.key === "f") console.log(favFruits.filter((fruit, i) => i%2==0));  
// });

// //zadanie 4
// const btn = document.createElement("button");
// btn.textContent = "usun";
// root.appendChild(btn);
// btn.addEventListener("click", () => btn.remove());

//zadanie 5
// 20 divow max, zeby nie generowac ich milion
// const num = Math.floor(Math.random()*20);
// for(let i=0; i<num; i++){
//     const div = document.createElement('div');
//     div.textContent = `to jest div numer ${i}`;
//     root.appendChild(div);
// }

//zadanie 6

// const span = document.createElement("span");
// const obj = {
//     div1: 'to jest div',
//     span1: 'to jest span',
//     div2: {
//         div3: 'to jest div',
//     },
//     span2: 'to jest span',
// }

// //nie działa
// // for(var tag in html){
// //     console.log(tag);
// //     if(tag.includes("div")){
// //         const div = document.createElement("div");
// //         div.classList.add(this.tag);
// //         // console.log(tag);
// //         div.textContent = this;

// //         root.appendChild(div);
// //     }
// // }

// const html = `
// <div id="div1">to jest div</div>
// <span id="span1">to jest span</span>
// <div id="div2">
//     <div id="div3">to jest div</div>
// </div>
// <span id="span2">to jest span</span>
// `;

// root.innerHTML += html;

//zadanie 7


// const food  = ['pizza', 'hamburger', 'fries', 'chocolate', 'spaghetti', 'ramen'];
// const food2 = [];
// function makeList(list){
//     const ol = document.createElement("ol");
//     const btn = document.createElement("button");
//     btn.textContent = "przenieś";
//     list.forEach(el =>{
//         const li = document.createElement("li");
//         li.textContent = el;
//         ol.appendChild(li);
//     });
//     root.appendChild(ol);
//     ol.parentNode.insertBefore(btn, ol.nextSibling);
// }
// makeList(food);
// makeList(food2);
// const btns = document.querySelectorAll("button");
// btns.forEach((btn, i) => {
//     btn.id = `btn${i+1}`;
    
//     btn.addEventListener("click", function(){
//         const list = btn.previousSibling;
//         const listLastElement = list.lastChild;
//         console.log(list.children.length);
//         if(list.children.length <= 1) btn.disabled = true;
//         else if(list.children.length > 1) btn.disabled = false;   

//         if(btn.id === "btn1"){
//             const listToAdd = btn.nextElementSibling;
//             listToAdd.appendChild(listLastElement);
//         }else if(btn.id === "btn2"){
//             const listToAdd = btn.parentNode.firstChild;
//             listToAdd.appendChild(listLastElement);
//         }
//     });
// });

//zadanie 8
// const p = document.createElement("p");
// p.innerHTML = "wprowadz element do dodania, oddzielajac poszczegolne wartosci spacjami";
// const textarea = document.createElement("textarea");
// textarea.id = "txtarea";
// textarea.placeholder = "element tekst kolor-czcionki ilość";
// textarea.cols = 44;
// const button = document.createElement("button");

// button.textContent = "dodaj elementy";
// button.addEventListener("click", addElements);

// root.appendChild(p);
// root.appendChild(textarea);
// root.appendChild(button);

// function addElements(){
//     const inputVal = document.getElementById("txtarea").value;
//     const values = inputVal.split(" ");
//     if(values.length > 4) return alert("za dużo danych dla elementu");
//     for(let i=0; i<values[3]; i++){
//         const el = document.createElement(values[0]);
//         el.textContent = values[1];
//         el.style.color = values[2];
//         root.appendChild(el);
//     }
//     document.getElementById("txtarea").value = "";
// }

//zadanie 9

const createTableBtn = document.getElementById("createTableBtn");
createTableBtn.addEventListener("click", createTable);

function createTable(e){
    e.preventDefault();
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    

    table.setAttribute("border", 1);
    table.setAttribute("cellpadding", 5);
    tbody.setAttribute("id", "tbody");
    
    const tableHeaderValues = ["Imię", "Nazwisko", "Wiek", "Ilość dzieci"];

    for(let i=0; i<tableHeaderValues.length; i++){
        const td = document.createElement("td");
        td.textContent = tableHeaderValues[i];
        tr.appendChild(td);
    }
    thead.appendChild(tr);
    table.appendChild(thead);
    root.appendChild(table);

    // addValuesToTable();
}

