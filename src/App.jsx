import React, { useState } from 'react'

import { Form, Logo, PackingList, Stats } from './components'

function App() {
  const [items, setItems] = useState([])

  const handleItem = (item) => {
    setItems((items) => [...items, item])
  }

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  return (
    <div className='app'>
      <Logo />
      <Form addToItem={handleItem} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
      />
      <Stats items={items} />
    </div>
  )
}

export default App
