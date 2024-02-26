import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Productos from './componentes/Productos/Productos';
import ItemDetail from './componentes/ItemDetail/ItemDetail';
import { CarritoProvider } from './context/CarritoContext';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem"  element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<h2>sitio en construccion</h2>} />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
      
    </div>
  )
}

export default App