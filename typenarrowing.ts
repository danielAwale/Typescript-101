function triple(value: number | string): number | string{
    // return value * 3 won't work
    // return value.repeat(3) wpon't work

    if (typeof value === "string") {
        return value.repeat(3);
    } 
    return value * 3
}