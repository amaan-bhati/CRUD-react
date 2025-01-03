import React from 'react';

const ItemList = ({ items, deleteItem, updateItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => deleteItem(item.id)}>Delete</button>
          <button
            onClick={() =>
              updateItem(item.id, { ...item, name: `${item.name} (Updated)` })
            }
          >
            Update
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
