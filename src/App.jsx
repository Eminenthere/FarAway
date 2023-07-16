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

  return (
    <div className='app'>
      <Logo />
      <Form addToItem={handleItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  )
}

export default App
