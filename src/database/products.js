// READ
export const getProducts = async ()  => {
    const response = await fetch(`http://localhost:4000/api/products`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
    const products = await response.json()
    console.log(products)
    return products.docs
}

//READ BY ID 
export const getProductById = async (pid) => {
    const response = await fetch(`http://localhost:4000/api/products/${pid}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
    const product = await response.json()
    console.log(product)
    return product
}