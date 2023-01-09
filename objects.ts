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

// Type alias 

// Instead of writing out object types in an annotation we can declare them separately in a type alias which is simply the desired shape of the object

// This allows us to make our code more readable and even the types elsewhere in our code


type Person = {
    name: string,
    age: number, 
    isAlive: boolean
}

function printPerson() : Person {
    return {name: 'james', age: 23, isAlive: false}
}

// Nested Objects 

type Song = {
    title: string, 
    artist: string, 
    numStreams: number,
    credits: {producer: string, writer: string}
};

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`)
}

const mySong : Song = {
    title: "the Dripping Tap",
    artist: "King Gizzard and the Lizard Wizard",
    numStreams: 32794938,
    credits: {producer: "Stu Mackenzie", writer: "Stu Mackenzie"}
}

calculatePayout(mySong)

//optional properties!
//putting in a question mark before after the key/property will let ts know it is optional!

type colors = {
    sky: string,
    grass: string,
    earth?: string
}

const myAnswer: colors = {sky: "blue", grass: "green"}

// READONLY MODIFIER

type User = {
    readonly id: number,
    username: string
}

const myUser: User = {
    id: 123,
    username: "john"
}

// myUser.id = 456
// Cannot assign to 'id' because it is a read-only property

//Intersection Types

// we can create intersection type by adding a & to combine different types!

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & {
    age: number
}

const harper: CatDog = {
    numLives: 7,
    breed: "chihuahua",
    age: 16
}