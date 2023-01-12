const sayHello = (person: string = "stranger") => {
    console.log(`Hello ${person}`)
    console.log(`Hello ${person}`)
}

sayHello();

const btn = document.getElementById("btn");

console.log(btn);

btn?.addEventListener("click", function() {
    alert("CLICKED!!");
})

// we get an error saying 'btn' is possibly 'null'.

//to rectify this error we can add a ? after btn

//btn?.

