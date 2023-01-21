"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample = exports.add = void 0;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sample(arr) {
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
}
exports.sample = sample;
