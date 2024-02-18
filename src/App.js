import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const objectTemplates = [
    { color: "black", backgroundColor: "black" },
    { color: "blue", backgroundColor: "blue" },
    { color: "green", backgroundColor: "green" },
    { color: "purple", backgroundColor: "purple" }
  ];

  const ObjectTemplate = ({ template, index, removeItem }) => (
    <div style={{ backgroundColor: template.backgroundColor }}>
      <button className="btn" onClick={() => removeItem(index)}>
        Удалить
      </button>
    </div>
  );

  const SelectedItem = ({ item }) => (
    <div className={`object ${item.type}`} style={{ backgroundColor: item.backgroundColor, position: 'static', left: `${item.x}px`, top: `${item.y}px` }}></div>
  );

  const removeSelectedItem = (index) => {
    setSelectedItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div className="object-container">
        {objectTemplates.map((template, index) => (
          <ObjectTemplate
            key={index}
            template={template}
            index={index}
            removeItem={removeSelectedItem}
          />
        ))}
      </div>

      <div className="object-container">
        {selectedItems.map((item, index) => (
          <SelectedItem key={index} item={item} />
        ))}
      </div>

      <button className="btn" onClick={() => {
        const newItem = {
          type: Math.random() < 0.5 ? "circle" : "square",
          size: Math.floor(Math.random() * 5) + 5,
          dimension: Math.floor(Math.random() * 50) + 3,
          backgroundColor: Math.random() < 0.5 ? "black" : "purple",
          x: Math.floor(Math.random() * 50),
          y: Math.floor(Math.random() * 50),
          name: `item_${selectedItems.length + 1}`
        };
        setSelectedItems(prevItems => [...prevItems, newItem]);
      }}>
        Добавить случайный объект
      </button>
    </div>
  );
}

export default App;

