function triple(value: number | string): number | string{
    // return value * 3 won't work
    // return value.repeat(3) wpon't work

    if (typeof value === "string") {
        return value.repeat(3);
    } 
    return value * 3
}

const el = document.getElementById("idk");

if(el) {
    el
} else {
    el
}

const printLetters = (word?: string) =>  {
    if(word) {
        for (let char of word) {
            console.log(char);
        }
    } else {
        console.log("You did not pass in a word")
    }
}

// equality narrowing

function someDemo(x: string|number, y: string|boolean) {
    if (x === y) {
        x.toUpperCase()

    }
}

someDemo(3, "3")

// in operator
interface Movie {
    title: string, 
    duration: number
}

interface TVShow {
    title: string, 
    numEpisodes: number, 
    episodeDuration: number, 
}

function getDuration(media: Movie|TVShow){
    if("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration
    }
    media.duration
}

//instaceof

function printFullDate(date: string | Date){
    if (date instanceof Date) {
        date.toUTCString();
    }
    else {
        new Date(date).toUTCString();
    }
}

class User {
    constructor(public name: string) {

    }
}
class Company {
    constructor(public name: string){}
}

function printName(entity: User | Company){
    if(entity instanceof User) {

    }
    else {
        entity
    }
}

// Type Predicates

interface Cat {
    name: string, 
    numLives: number, 
}

interface Dog{
    name: string, 
    breed: string, 
}

function isCat(animal: Cat | Dog): animal is Cat{
    return (animal as Cat).numLives !== undefined
}

function makeNoise(animal: Cat | Dog){
    if(isCat(animal)) {
        animal
        return "Meow"
    } else {
        animal
    }
}

// Discrimated Unipns 

interface Rooster{
    name: string, 
    weight: number,
    age: number,
    kind: "rooster"
}

interface Cow {
    name: string, 
    weight: number, 
    age: number,
    kind: "cow"
}

interface Pig {
    name: string, 
    weight: number, 
    age: number,
    kind: "pig"
}

type FarmAnimal = Pig | Rooster | Cow

function getFarmAnimalSound(animal: FarmAnimal){
    switch(animal.kind){
        case("pig"):
        return "Oink!";
        case("cow"):
        return "Moo";
        case ("rooster"):
        return "cokadoodledoo"
    }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"

}