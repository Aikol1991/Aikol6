import React, { useState } from "react";
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([[]]);

  function addItem() {
    if (!newItem) {
      alert("Вы ничего не написали.")
      return;
    }


    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems (oldList => [...oldList, item]);
    setNewItem("");

  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !==id);
    setItems(newArray);
  }

  return (
    <div className="App">
    <h1>Todo list App</h1>
    <input type="text" placeholder='Напишите что-нибудь....' value={newItem} onChange={e => setNewItem(e.target.value)}/>
    <button onClick={() =>addItem()}>Добавить в список</button>
    <ul>
      {items.map(item => {
      return(
        <li key={item.id}>{item.value} <button className="delete-btn" onClick={() => deleteItem(item.id)}>x</button></li>
      )
    })}
    </ul>
    </div>
  );
}

export default App;
