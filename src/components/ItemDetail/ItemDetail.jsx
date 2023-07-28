import { ItemCount } from "../../containers/ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext"



export const ItemDetail = ({product}) => {
    const { addItem } = useCartContext()

    const onAdd = (count) => {
        addItem(product, count)
    }

    return (
        <main className='imgbq'>
            <div className='cardDetail'>
            <img className='imgProductos' src= {product.thumbnail} alt='imagen'/>
            <div className='cardInfoDetail' >
                <h1 className='productoTitle'>{product.title}</h1>
                <h2 className='number'>${new Intl.NumberFormat().format((product.price))}</h2>
                <p className='cardDescription'>{product.description}</p>
                <footer className='footerProducto'> Stock disponible: {product.stock}</footer>
                <ItemCount initialValue={1} min={1} max={product.stock} onAdd={onAdd} />
            </div>
            </div>
        </main> 
    )
}