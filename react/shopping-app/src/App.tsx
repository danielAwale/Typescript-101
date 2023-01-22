import React, {useState} from 'react';
import './App.css';
// import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import Item from "./models/item"
import ShoppingForm from './components/ShoppingForm';

function App() {

const [items, setItems] = useState<Item[]>([])
const addItem = (product: string) => {
  console.log("Made it to the app");
  setItems([...items, {id: 3, product, quantity: 1}])
}
//   const items = [
//     {id:1, product: "Lemon", quantity: 3},
//     {id:2, product: "chicken breast", quantity: 3}
// ]
  return (
    <div>
      <ShoppingList items={items}/>
      <ShoppingForm onAddItem={addItem} />
    </div>
  );
}

export default App;
