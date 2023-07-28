import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../database/products"
import { ItemList } from "../../components/ItemList/ItemList"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {category} = useParams()

    useEffect(() => {
        getProducts().then((res) => {
            if(category){
                const filterProd = res.filter((data) => data.category === category)
                setProducts(filterProd)
            }else{
                setProducts(res)
            }
        })
    }, [category])
    
    return  <ItemList products={products}/>
}