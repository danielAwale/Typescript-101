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

