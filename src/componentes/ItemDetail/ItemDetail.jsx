import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';


const ItemDetail = ({id, nombre, stock, precio, img}) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const manejadorCantidad = (cantidad) => {
     setAgregarCantidad(cantidad);
     console.log("Productos agregados: " + cantidad);
    }

    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre}</h2>
            <p>Precio: {precio}</p>
            <p>id: {id}</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora veritatis quisquam dicta maxime provident unde cum cumque enim et sed quod voluptas autem perferendis excepturi commodi rem, officiis fuga ducimus.</p>
            <img src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail