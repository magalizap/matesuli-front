import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    const {cart, totalPrice, emptyCart} = useCartContext()

    return(
        <></>
    )
}