const productos = [
    { id: "1", nombre: "Yerba", precio: 500, img: "./img/yerba.jpg", idCat:"2" },
    { id: "2", nombre: "Fideos", precio: 180, img: "./img/fideos.jpg", idCat:"2" },
    { id: "3", nombre: "Arroz", precio: 200, img: "./img/arroz.jpg", idCat:"3" },
    { id: "4", nombre: "Aceite", precio: 900, img: "./img/aceite.jpg", idCat:"3" },
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getUnProducto = () => {
    return new Promise( resolve => {
        setTimeout( () => {
            const producto = produsctos.find(item => item.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=> {
           const productosCategoria = productos.filter(item => item.idCat === idCategoria);
           resolve(productosCategoria);
        },2000)
    })

}