import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito ="../recursos/carrito.png"
  return (
    <div>
        <img  className='imgCarrito' src={imgCarrito} alt="" />
        <strong> 3 </strong>
    </div>
  )
}

export default CartWidget