import Item from "../item/item";

const ItemList = ({productos}) => {
  return (
    <div>
        {
            productos.map(producto => <Item key={producto.id} {...producto} />)
        }
    </div>
  )
}

export default ItemList