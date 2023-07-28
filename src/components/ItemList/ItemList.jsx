import { Item } from "../Item/Item";
import './ItemList.css'

export const ItemList = ({products}) => {
    return (
        <main className='imgbq' >
        <div>
          <p className='title'>CATÁLOGO DE PRODUCTOS</p>
          <div className='alinearProductos'>
            {products.map((producto, id) => <Item key={id} item = {producto}/>)}
          </div>
        </div>
      </main>
    )
}