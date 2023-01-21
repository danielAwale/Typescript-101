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