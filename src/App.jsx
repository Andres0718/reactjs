import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductoCard from './componentes/ProductoCard/ProductoCard'
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/id:Categoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem"  element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>


      <ItemListContainer />
    </div>
  )
}

export default App