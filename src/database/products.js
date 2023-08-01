import { logger } from "../../../backend/src/middlewares/logger"

// READ
export const getProducts = async ()  => {
    const response = await fetch(`http://localhost:4000/api/products`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
    const products = await response.json()
    logger.info(products)
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
    logger.info(product)
    return product
}