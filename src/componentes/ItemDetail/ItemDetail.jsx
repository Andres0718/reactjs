import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <p>Precio: {precio}</p>
            <p>id: {id}</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora veritatis quisquam dicta maxime provident unde cum cumque enim et sed quod voluptas autem perferendis excepturi commodi rem, officiis fuga ducimus.</p>
            <img src={img} alt={nombre} />


        </div>
    )
}

export default ItemDetail