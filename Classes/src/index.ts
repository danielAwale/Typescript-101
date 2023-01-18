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