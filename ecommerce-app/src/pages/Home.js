import React, { useState } from 'react';
import ItemList from '../components/ItemList';
import AddItem from '../components/AddItem';

const Home = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const updateItem = (id, updatedItem) => {
        setItems(items.map((item) => (item.id === id ? updatedItem : item)));
    };

    return (
        <div>
            <AddItem addItem={addItem} />
            <ItemList items={items} deleteItem={deleteItem} updateItem={updateItem} />
        </div>
    );
};

export default Home;
