import React from 'react'
import ProductoCard from './componentes/ProductoCard/ProductoCard'
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ProductoCard/>
      <ItemListContainer greeting={"hola mundo"}/>
    </div>
  )
}

export default App