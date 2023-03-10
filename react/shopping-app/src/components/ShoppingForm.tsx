import React, { useRef } from "react";

interface ShoppingListFormProps {
    onAddItem: (item: string) => void;
}

function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newProduct = inputRef.current!.value;
        onAddItem(newProduct);
        inputRef.current!.value = "";
    }
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="product name" ref={inputRef} />
        <button type="submit">Add</button>
    </form>
    )
}
export default ShoppingListForm