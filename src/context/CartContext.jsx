import { createContext, useContext, useState } from "react";

const CartContext = createContext() 
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id) 
    }

    const addItem = (product, quantity) => {
        if(isInCart(product.id)) {
            const index = cart.findIndex(prod => prod.id === product.id)
            const aux = [...cart]
            aux[index].quantity = quantity
            setCart(aux)
        }else{
            const newproduct = {
                ...product,
                quantity: quantity
            }
            setCart([...cart, newproduct])
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }
    
    const emptyCart = () => {
        setCart([])
    }

    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.quantity * prod.price), 0)
    }

    const contextValue = {cart, addItem, removeItem, emptyCart, totalPrice, getItemQuantity}

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider