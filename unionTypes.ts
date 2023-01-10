let myAge: number | string = 29;
myAge = "29";

type Points = {
    x: number, 
    y: number
}

type Loc = {
    lat: number,
    long: number
}

let coordinates: Points | Loc = {x: 21, y:23}
coordinates = {lat: 321.12, long: 322.1}

// UNIONS - NARROWING THE TYPE

// Narrowing the type is simply doing a typecheck before working with a value. If your value is a spring you may want to use it differently than if you got a number.

// Since unions allow multiple types for a value, its good to check what came through before working with it. 

function printAge (age: number): void {
    console.log(`I am ${age} years old`);
}

function calculateTax(price: number | string, tax: number): number {
    if (typeof price === "string"){
        price = parseFloat(price.replace("$", ""));   
    } 
        return price * tax;
}

//Union types with array!
// to make a union type with array it is crucial to use parenthesis

let arr: (number | string)[] = [1,2,3,"4",5]
arr.push("another number");
arr.push(4321245);

// Literal Types

// Literal types are not just types -  but the values themselves too!

// On it’s own, that’s not super helpful. But combine it with something like unions and you can have a very fine tuned type options for typescript to enforce!

let pi: 3.147 = 3.147;
// pi = "yummy!"

type dayOfWeekend = 'Friday' | 'Saturday' | 'Sunday'

let today: dayOfWeekend = "Friday"