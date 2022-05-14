import React, { useState } from 'react';
import Menu from './Menu';
import CategoriesNavbar from './CategoriesNavbar';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
// returns an array with 'all' as well as unique/(new Set) categories item from the items array

// console.log(allCategories); --> ['all', 'breakfast', 'lunch', 'shakes']

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <CategoriesNavbar categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
