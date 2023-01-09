// Objects can be typed by declaring what the object should look like in the annotation
// Accessing a property that isnt defined as performing operations without keeping types in mind will throw errors!


function printName(person: {first: string, last: string}): void {
    console.log(`${person.first}, ${person.last}`)
}

printName({first: 'John', last: 'Mayer'})

// We can have a function with a return type annotation of an object literal.

// We can have a variable where we use a object type and of course we can write the parameter type annotations

// for a function to be an object as well.

let coordinates: {x:number, y:number} = {x:32, y:33};

function someCoordinates() : {x: number, y:number} {
    return {x: Math.random(), y: Math.random()}
}