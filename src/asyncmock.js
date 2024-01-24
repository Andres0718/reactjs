const productos = [
    { id: "1", nombre: "iPhone", stock:10, precio: 500, img: "https://tiendasishop.com/media/catalog/product/i/p/iphone_15_pro_black_titanium_pdp_image_position-1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", idCat:"2" },
    { id: "2", nombre: "iPhone", stock:10, precio: 180, img: "https://tiendasishop.com/media/catalog/product/i/p/iphone_15_pro_black_titanium_pdp_image_position-1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", idCat:"2" },
    { id: "3", nombre: "iPhone", stock:10, precio: 200, img: "https://tiendasishop.com/media/catalog/product/i/p/iphone_15_pro_black_titanium_pdp_image_position-1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", idCat:"3" },
    { id: "4", nombre: "iPhone", stock:10, precio: 900, img: "https://tiendasishop.com/media/catalog/product/i/p/iphone_15_pro_black_titanium_pdp_image_position-1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", idCat:"3" },
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = () => {
    return new Promise( resolve => {
        setTimeout( () => {
            const producto = produsctos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=> {
           const productosCategoria = productos.filter(item => item.idCat === idCategoria);
           resolve(productosCategoria);
        },100)
    })

}