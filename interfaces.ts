// Interfaces

// Interfaces serve almost the exact same purpose as type aliases with a slightly different syntax

// We can use them to create reusable modular types that describe the shapes of objects

interface Point {
    x: number;
    y: number;
}

const pt: Point = {x:23, y:25};