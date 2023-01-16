const sayHello = (person: string = "stranger") => {
    console.log(`Hello ${person}`)
    console.log(`Hello ${person}`)
}

sayHello();

interface Todo {
    text: string;
    completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

const todosJSON = localStorage.getItem("todos")
console.log(JSON.parse(todosJSON));
const todos: Todo[] = []

form.addEventListener("submit", function(e){
    e.preventDefault();
    const anewTodo: Todo = {
        text: input.value, 
        completed: false,
    }
    createTodo(anewTodo);
    todos.push(anewTodo);

    this.localName.setItem("todos", JSON.stringify(todos))
    input.value= "";
    
});

function createTodo(todo: Todo){
    const newTodo = input.value;
    const newLI = document.createElement("li")
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(todo.text);
    newLI.append(checkbox)
    list.append(newLI);
}
//a different syntax

//(<HTMLInputElement>input).value doesn't work with jsx components

console.log(btn);

btn.addEventListener("click", function() {
    alert(input.value);
    input.value = "";
})



// we get an error saying 'btn' is possibly 'null'.

//to rectify this error we can add a ? after btn

//btn?.

//using the non null operator ! we can be sure that the specific item won't be null

// TYPE ASSERTIONS 
// Sometimes you might have more specific information about a values type and you want tot make sure TS knows it too
// You can asserta values type by using the as keyword followed by the specific type you want to assert


let mystery: unknown = "Hello World!";

const numChars = (mystery as string).length;
// 'mystery' is of type 'unknown'.
// using as




