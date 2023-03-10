// class Player {
//     readonly first: string;
//     readonly last: string;
//     // private score: number = 0;
//     // private will only work in ts, wont work during runtime
//     #score: number = 0;
//     // hash symbol will work in ts and js, will work during runtime

//     constructor(first: string, last: string){
//         this.first = first
//         this.last = last
//     }

// }

class Player {
    protected _score: number = 0;    
    constructor(public first: string, public last: string){}

    get fullName() :string {
        return `${this.first} ${this.last}`
    }

    get score():number {
        return this._score
    }

    set score(newScore: number) {
        if(newScore < 0) {
            throw new Error ("score cannot be negative")
        } 
        this._score = newScore
        //protected class is only accessible in the child. 
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;

    maxScore() {
        this._score = 999999;

    }
}

const john = new Player("John", "Watson");
console.log(john.fullName)

// So public available anywhere private only available in the exact class you define it in, protected

// available in the class you define it in.

interface Colorful {
    color: string;
}

class Bike implements Colorful {
    // color = "red"
    constructor(public color: string) {}
}

class Jacket implements Colorful {
    constructor(public brand: string, public color: string){}
}

const bike1 = new Bike("Red")
const jacket1 = new Jacket("Prada", "black")

abstract class Employee {
    constructor(public first: string, public last: string){
    }
    abstract getPay(): number;
    greet() {
        console.log("Hello!")
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number){
        super(first, last);

    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee{
    constructor(first: string, last: string, private hurlyRate:number, private hoursWorked: number) {
        super (first, last)
    }
    getPay(): number {
        return this.hurlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 96000)
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100)
console.log(bill.getPay());
