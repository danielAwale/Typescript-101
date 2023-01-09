// Array types
// Arrays can be typed using a type annotation followed by empty array brackets, like number for an array of numbers 

const age: number[] = []
age.push(54)

const names: string[] = ["james", "john", "joseph"]
names.push("jerry")

//another way of typing an array

const shoes: Array<string> = []

// multidimensional Arrays

const board: string[][] = [
    ['x', 'o', 'x'],
    ['x', 'o', 'x'],
    ['x', 'o', 'x']
]