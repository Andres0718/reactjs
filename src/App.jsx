import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem"  element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>


      <ItemListContainer />
    </div>
  )
}

export default App