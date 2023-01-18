"use strict";
var _Player_score;
class Player {
    // hash symbol will work in ts and js, will work during runtime
    constructor(first, last) {
        // private score: number = 0;
        // private will only work in ts, wont work during runtime
        _Player_score.set(this, 0);
        this.first = first;
        this.last = last;
    }
}
_Player_score = new WeakMap();
const john = new Player("John", "Watson");
