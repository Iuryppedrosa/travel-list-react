import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItem} />
        <PackingList
          items={items}
          onDeleteItem={handleRemoveItem}
          onToggleItem={handleToggleItem}
          handleClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </>
  );
}
