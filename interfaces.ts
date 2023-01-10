// Interfaces

// Interfaces serve almost the exact same purpose as type aliases with a slightly different syntax

// We can use them to create reusable modular types that describe the shapes of objects

interface Point {
    x: number;
    y: number;
}

const pt: Point = {x:23, y:25};

interface Person {
    readonly id: number
    first: string;
    last: string;
    nickname?: string;
}

const thomas: Person = {id: 23, first: "Thomas", last: "Hardy", nickname: "Tom"}