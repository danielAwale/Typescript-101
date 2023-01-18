"use strict";
console.log("it's working??");

class Player {
    constructor(first, last){
        this.first = first;
        this.last = last;

    }
    taunt(){
        console.log("BOOYAH!")
    }
}

const player1 = new Player("blue", "steele")
player1.taunt();
console.log(player1.first)
console.log(player1.last)

const player2 = new Player("daniel", "awale")
player2.taunt();

