// Tuples

// Tuples are a special type exclusive to typescript 
// Tuples are arrays of fixed length and ordered with specific types- like super rigid array.


//example

const color: [number, number, number] = [13, 23, 21]

// They are arrays of fixed length and types.

// They don't exist in JavaScript.

// It's just a regular array behind the scenes.

// But TypeScript adds some extra rules to make sure in this case we have three numbers and only three

// numbers in this array.

// ---Another example

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

//Limitation of tuple --  once the array is created, we can use the push and pop and maybe more methods to add and remove items from the array!

const responses: HTTPResponse[] = [[404, "Not found"], [200, "OK"]];