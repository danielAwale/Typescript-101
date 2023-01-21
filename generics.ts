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

// identity<number>(7);
// identity<string>("fhhf");

interface Cat {
    name: string
    breed: string;
}

function getRandomElement<T>(list: T[]):T{
    const randIndex = Math.floor(Math.random() * list.length)
    return list[randIndex];
}

getRandomElement<string>(["a","b","c"]);
getRandomElement<number>([4,32,43,2,1,4,5]);

getRandomElement(["a", "a", "D","e"])

// You don't have to go around using this generic type parameter syntax all the time.
// There are times you have to, but sometimes you can rely on TypeScript ability to infer the type.

function merge<T extends object, U extends object>(object1: T, object2: U){
    return{
        ...object1, 
        ...object2
    }
}

const combo = merge({name: "Daniel"}, {pets: "none"})
// merge({name: "Danie"}, 9)
//Argument of type 'number' is not assignable to parameter of type 'object'.

interface Lengthy {
    length: number; 
}

function getLength<T extends Lengthy>(thing: T) : number {
    return thing.length
}

getLength("something");

function makeEmptyList<T = number>():T[] {
    return []
}

const num = makeEmptyList();
const bools = makeEmptyList<boolean>();

interface Song {
    title: string,
    artist: string,
}

interface Video {
    title: string, 
    creator: string, 
    resolution: string
}

// class VideoPlaylist {
//     public videos: Video[] = []
// }

// class SongPlaylist {
//     public songs: Song[] = []
// }

class Playlist<T> {
    public queue: T[] = [];
    add(el: T) {
        this.queue.push(el)
    }
}