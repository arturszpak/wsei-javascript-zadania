    // //zadanie1 i zadanie2
    // function Person(firstName, lastName, age, country, city) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    //     this.country = country;
    //     this.city = city;
    //     this.favDishes = [];
    // }

    // Person.prototype.showInfo = function () {
    //     return (`Name: ${this.firstName} ${this.lastName}, Age: ${this.age}, Location: ${this.country}, ${this.city}`);
    // }
    // Person.prototype.addAge = function () {
    //     this.age++;
    // }

    // //część do zadania2
    // Person.prototype.addFavDish = function (dish) {
    //     this.favDishes.push(dish);
    // }
    // Person.prototype.showMyDishes = function () {
    //     console.log(this.favDishes);
    // };

    // const person1 = new Person("Jan", "Kowalski", 28, "Poland", "Cracow");
    // const person2 = new Person("Mark", "Muller", 34, "Germany", "Berlin");

    // //Testy
    // person1.addAge();
    // person2.addAge();
    // person2.addAge();
    // person1.showInfo();
    // person1.addFavDish("Pizza");
    // person1.addFavDish("Spaghetti");
    // person2.addFavDish("Chicken");
    // person2.addFavDish("Pasta");
    // person1.showMyDishes();

    // console.log(person1.age);
    // console.log(person2.age);


    //zadanie 3
    // function Calculator(num1, num2) {
    //     this.num1 = num1;
    //     this.num2 = num2;

    //     this.add = function () {
    //         return (this.num1 + this.num2);
    //     }
    //     this.substract = function () {
    //         return (this.num1 - this.num2);
    //     }
    //     this.multiply = function () {
    //         return (this.num1 * this.num2);
    //     }
    //     this.division = function () {
    //         if (!num2 === 0)
    //             return (this.num1 / this.num2);
    //         else
    //             return "Cannot divide by 0!";
    //     }
    // }

    // const calc1 = new Calculator(1, 4);
    // const calc2 = new Calculator(2, 0)
    // console.log(calc1.add());
    // console.log(calc1.multiply());

    // console.log(calc2.substract());
    // console.log(calc2.division());


    //zadanie 4

    function Ladder(maxSteps) {
        this.maxSteps = maxSteps;
        let currentStep = 0;

        const txt = {
            startStep: 'Start step: ',
            goingUp: "You're climbing up, step: ",
            goingDown: "You're going down, step: ",
            maxHeight: "You've reached the top of the ladder!",
            minHeight: "You've reached the bottom of the ladder!",
        }

        //Going up method
        this.goUp = function (stepsToGo) {
            console.log(txt.startStep + currentStep);

            for (let i = 0; i < stepsToGo; i++) {
                if (currentStep < maxSteps) {
                    console.log(`${txt.goingUp}${++currentStep}`);
                } else {
                    console.log(`${txt.maxHeight}`);
                    currentStep = maxSteps;
                    break;
                }
            }
        }

        //Going down method
        this.goDown = function (stepsToGo) {
            console.log(txt.startStep + currentStep);

            for (let i = 0; i < stepsToGo; i++) {
                if (currentStep > 0) {
                    currentStep--;
                    console.log(`${txt.goingDown}${currentStep}`);
                } else {
                    console.log(`${txt.minHeight}`);
                    currentStep = 0;
                    break;
                }
            }
        }

    }

    //Set Instance with ladder's height argument
    const l1 = new Ladder(10);

    //Invoke the goUp/goDown method with argument which tells how many steps to go
    l1.goUp(2);
    l1.goDown(1);