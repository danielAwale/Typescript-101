import React from 'react'
import Item from '../models/item'

interface ShoppingListProps {
    items: Item[]
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element{
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log('submitted');
        
    }
  return (
    <div onSubmit={handleSubmit}>
        <h1>Shopping List</h1>
        <ul>
           {props.items.map(item => (
            <li key={item.id}>{item.product} - {item.quantity}</li>
           ))}
        </ul>
    </div>
  )
}
