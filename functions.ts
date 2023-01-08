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