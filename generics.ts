// GENERICS 

// Generics allow us to define reusable functions and classes that work with multiple types rather than a single type 

// The syntax is not pretty. They are used all over the place, so it is best to get comfortable with them. 

//const nums: number[] = []
const nums: Array<number> = []
const colors: Array<string> = []

function numberIdentity(item: number): number{
    return item;
}

function stringIdentity(item: string): string{
    return item;
}

// //below is not good!
// function identity(item: any): any{
//     return item; 
// }

function identity<Type>(item: Type): Type {
    return item; 
}

identity<number>(7);