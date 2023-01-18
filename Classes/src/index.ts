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
    private score: number = 0;    
    constructor(public first: string, public last: string){}

}

const john = new Player("John", "Watson");
