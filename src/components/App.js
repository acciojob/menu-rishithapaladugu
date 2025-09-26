import React, { useState } from 'react';
import Menu from './Menu';
import './styles.css';

const menuItemsData = [
  { id: 1, name: 'Pancakes', category: 'Breakfast', price: 8.99, image: 'pancakes.jpg' },
  { id: 2, name: 'Burger', category: 'Lunch', price: 12.50, image: 'burger.jpg' },
  { id: 3, name: 'Strawberry Shake', category: 'Shakes', price: 5.00, image: 'strawberry-shake.jpg' },
  { id: 4, name: 'Eggs Benedict', category: 'Breakfast', price: 10.00, image: 'eggs-benedict.jpg' },
  { id: 5, name: 'Salad', category: 'Lunch', price: 9.75, image: 'salad.jpg' },
  { id: 6, name: 'Chocolate Shake', category: 'Shakes', price: 5.50, image: 'chocolate-shake.jpg' },
];

function App() {
  const [menuItems, setMenuItems] = useState(menuItemsData);
  const [activeCategory, setActiveCategory] = useState('All');

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setMenuItems(menuItemsData);
    } else {
      const filteredItems = menuItemsData.filter(item => item.category === category);
      setMenuItems(filteredItems);
    }
  };

  return (
    <div id="main" className="app-container">
      <h1>Our Menu</h1>
      <div className="filter-buttons">
        <button id="filter-btn-1" onClick={() => filterItems('Breakfast')}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterItems('Lunch')}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterItems('Shakes')}>Shakes</button>
        <button onClick={() => filterItems('All')}>All</button>
      </div>
      <Menu items={menuItems} />
    </div>
  );
}

export default App;

