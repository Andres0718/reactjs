import Item from "../item/item";
import './ItemList.css';

const ItemList = ({productos}) => {
  return (
    <div className="contenedorProductos">
        {
            productos.map(producto => <Item key={producto.id} {...producto} />)
        }
    </div>
  )
}

export default ItemList