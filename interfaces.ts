// Interfaces

// Interfaces serve almost the exact same purpose as type aliases with a slightly different syntax

// We can use them to create reusable modular types that describe the shapes of objects

interface Point {
    x: number;
    y: number;
}

const pt: Point = {x:23, y:25};

interface Person {
    readonly id: number
    first: string;
    last: string;
    nickname?: string;
    sayHi:() => string;
}

const thomas: Person = {
    id: 23, 
    first: "Thomas", 
    last: "Hardy", 
    nickname: "Tom",
    sayHi: () => {
        return "Hello!"
    }

}

interface Product {
    name: string, 
    price: number, 
    applyDiscount(discount: number): number
}

const shoes: Product = {
    name: "Jordans",
    price: 200,
    applyDiscount(amount: number){
        return 2;
    }
}


interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string; 
    bark(): string
}

const elton: Dog = {
    name: "elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark(){
        return "Woof!"
    }
}

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb tracker" | "guide dog"
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark"
    },
    job: "guide dog"
}

interface Individual {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Individual, Employee {
    level: string,
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 21345,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"]
}

