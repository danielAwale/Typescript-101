"use strict";
console.log("it's working??");

class Player {
    #score = 0; 
    Numlives = 10;
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return `${this.first} ${this.last}`
    }
    get score() {
        return this.#score
    }

    set score(update) {
        if(update < 0) {
            throw Error 
        } else
        this.#score = update;
    }
    taunt(){
        console.log("BOOYAH!")
    }

    loseLives(){
        this.Numlives -= 1
    }
    getScore() {
        return this.#score;
    }
    setScore(set) {
        this.#score = set
    }
}

class AdminPlayer extends Player {
    isAdmin = true;
    constructor(first, last, powers) {
        super(first, last);
        this.powers = powers
    }
}

// const player1 = new Player("blue", "steele")
// player1.taunt();
// console.log(player1.first)
// console.log(player1.last)
// console.log(player1.Numlives);
// player1.loseLives()
// console.log(player1.Numlives)
// player1.#score;
// console.log(player1.getScore())
// player1.setScore(42)
// console.log(player1.getScore())
// console.log(player1.fullName);
// console.log(player1.score);
// player1.score = 129;
// console.log(player1.score)


// const player2 = new Player("daniel", "awale")
// // player2.taunt();

const ad = new AdminPlayer("jon", "walters", "water");
console.log(ad)
console.log(ad.taunt());



