// Objects can be typed by declaring what the object should look like in the annotation
// Accessing a property that isnt defined as performing operations without keeping types in mind will throw errors!


function printName(person: {first: string, last: string}): void {
    console.log(`${person.first}, ${person.last}`)
}

printName({first: 'John', last: 'Mayer'})