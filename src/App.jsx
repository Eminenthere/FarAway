import React, { useState } from 'react'

import { Form, Logo, PackingList, Stats } from './components'

function App() {
  const [items, setItems] = useState([])

  const handleItem = (item) => {
    setItems((items) => [...items, item])
  }

  return (
    <div className='app'>
      <Logo />
      <Form addToItem={handleItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  )
}

export default App
