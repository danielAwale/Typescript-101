// FUNCTION PARAMETER TYPES

// In ts, we can specify the type of function parameters in a function definition 

// This allows ts to enforce the types for the values being passed into your function 

// Typing parameters is just like typing variables. 

function sqaure(num: number) {
    return num * num 
}

//what needs to be avoided

function greet(name) {
    return `hello ${name}, welcome here`
}

greet('james');
greet(1);
greet(false);

// Just like JS we can have multiple parameters with different types! However, order matters 

const doSomething = (person: string, age: number, isFunny: boolean) => {

    return `${person}, ${age}, ${isFunny}`

}

doSomething('james', 12, false);

// Default Parameters

function greeting(name: string = 'stranger') {
    return `hello ${name}, welcome here`
}

// FUNCTION RETURN TYPES 

// We can specify the type returned by a function. 
// Even though ts can often infer this, i prefer the explicit annotations 
// Add the type annotation after the function parameter list!


function add(x:number, y:number):number {
    return x + y;
}

const subtract = (x:number, y: number): number => {
    // x - y
//A function whose declared type is neither 'void' nor 'any' must return a value.ts(2355)
// this is fixed by using the return key word
    return x - y
}

//VOID Type
// void type is used when we aren't trying to return anything explicitly! 

const log = (msg: string): void => {
    console.log(msg);
}