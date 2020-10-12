//zadanie1

// function Person(firstName, lastName, age, country, city, language) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.language = language;

//     this.changeAge = function (newAge) {
//         this.age = newAge;
//     };
//     this.changeCity = function (newCity) {
//         this.city = newCity;
//     };
// }

// let person1 = new Person("Artur", "Szpak", 21, "Poland", "Cracow", "Polish");
// let person2 = new Person(
//     "Jan",
//     "Kowalski",
//     34,
//     "Poland",
//     "Bydgoszcz",
//     "Polish"
// );
// let person3 = new Person(
//     "John",
//     "Doe",
//     26,
//     "USA",
//     "New York",
//     "American English"
// );
// let person4 = new Person(
//     "James",
//     "Smith",
//     18,
//     "England",
//     "Liverpool",
//     "British English"
// );
// let person5 = new Person("Adam", "Małysz", 40, "Poland", "Zakopane", "Polish");

// const people = [person1, person2, person3, person4, person5];
// //przykładowe miasta
// const cities = [
//     "Warsaw",
//     "Prague",
//     "Pekin",
//     "Paris",
//     "Manchester",
//     "San Francisco",
//     "Moscow",
// ];

// people.forEach((p) => {
//     //losowy wiek
//     p.changeAge(Math.floor(Math.random() * 100));
//     //losowe miasto z tablicy
//     p.changeCity(cities[Math.floor(Math.random() * cities.length)]);
// });

// console.log(people);

//ZADANIE2
const Calculator = {
    memory: "",
    calculate(type, ...args) {
        let sum = 0;
        args.forEach(arg => {
            if (type === "+") sum += arg;
            else if (type === "-") sum -= arg;
            else if (type === "*") sum *= arg;
            else if (type === "/") sum /= arg;
            else throw new Error("Type not defined!");
            this.memory += `${arg}${type}`;
        });
        this.memory = this.memory.slice(0, length - 1);
        this.memory += `=${sum}, `;
        return sum;

    },

    //wypisanie memory
    showMemory() {
        console.log(this.memory);
    },

    //funkcja czyszczaca
    clearMemory() {
        this.memory = "";
    },
}
// Types "+", "-", "*", "/"
Calculator.calculate("+", 2, 4, 12, 7);
Calculator.calculate("*", 4, 3, 5);

//zadanie3
function Game() {
	this.changeNumber = function () {
		Game.prototype.interval = setInterval(() => {
			Game.prototype.number = Math.round(Math.random() * 10);
			console.log(Game.prototype.number);
		}, 1000);
	};
	this.checkNumber = function () {
		Game.prototype.check = setInterval(() => {
			if (Game.prototype.number > 5) {
				clearInterval(Game.prototype.interval);
				clearInterval(Game.prototype.check);
			}
		}, 1000);
	};
}
const game1 = new Game();
const game2 = new Game();
game1.changeNumber();
game2.checkNumber();
