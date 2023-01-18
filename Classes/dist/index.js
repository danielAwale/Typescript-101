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
        this.score = 0;
    }
}
const john = new Player("John", "Watson");
