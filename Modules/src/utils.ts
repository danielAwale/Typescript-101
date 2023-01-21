function add(x: number,y: number){
    return x + y
}

function sample<T>(arr:T[]): T {
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
}