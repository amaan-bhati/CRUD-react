import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addItem({ id: Date.now(), name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;
