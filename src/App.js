import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([
    
  ]);

  const objectTemplates = [
    { type: "circle", color: "black", size: 10, dimension: 20, backgroundColor: "black" },
    { type: "square", color: "blue", size: 15, dimension: 5, backgroundColor: "blue" },
    { type: "circle", color: "green", size: 8, dimension: 16, backgroundColor: "green" },
    { type: "square", color: "purple", size: 12, dimension: 6, backgroundColor: "purple" }
  ];

  const ObjectTemplate = ({ template }) => (
    <div className={`object ${template.type}`} style={{ backgroundColor: template.backgroundColor }}></div>
  );

  const SelectedItem = ({ item }) => (
    <div className={`object ${item.type}`} style={{ backgroundColor: item.backgroundColor, position: 'static', left: `${item.x}px`, top: `${item.y}px` }}></div>
  );

  return (
    <div className="App">
      <h2>Шаблоны</h2>
      <div className="object-container">
        {objectTemplates.map((template, index) => (
          <ObjectTemplate key={index} template={template} />
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

