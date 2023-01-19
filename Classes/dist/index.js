"use strict";
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
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this._score = 0;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("score cannot be negative");
        }
        this._score = newScore;
        //protected class is only accessible in the child. 
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999;
    }
}
const john = new Player("John", "Watson");
console.log(john.fullName);
class Bike {
    // color = "red"
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}
const bike1 = new Bike("Red");
const jacket1 = new Jacket("Prada", "black");
