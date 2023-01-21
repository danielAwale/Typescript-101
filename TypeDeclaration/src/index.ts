import axios from "axios";
axios.get("https://jsonplaceholder.typicode.com/users/1"
).then(res => {
    console.log("Woo!")
    console.log(res.data)
})
.catch(e => {
    console.log("error")
})

