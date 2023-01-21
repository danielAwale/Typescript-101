import axios from "axios";
import _ from "lodash";

axios.get("https://jsonplaceholder.typicode.com/users/1"
).then(res => {
    console.log("Woo!")
    console.log(res.data)
})
.catch(e => {
    console.log("error")
})


_.sample([32, 123, 543,212,45])


