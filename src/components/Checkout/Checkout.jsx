/*import { useRef } from "react";
import { useCartContext } from "../../context/CartContext";
import {Link, useNavigate} from "react-router-dom"
import { getProducts } from "../../database/products";

export const Checkout = () => {
    const datForm = useRef()
    const {cart, totalPrice, emptyCart} = useCartContext()

    let navigate = useNavigate()

    const handlerForm = (e) => {
        e.preventDefault()

        const newForm = new FormData(datForm.current)
        const client  = Object.fromEntries(newForm)
        const aux = [...cart]

        aux.forEach(productCart => {
            getProducts(productCart.id).then()
        })
    }
}
*/
