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