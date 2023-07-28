import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getProductById } from "../../database/products"
import { ItemDetail } from "../../components/ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getProductById(id).then((item) => {
            const productId = item
            setProduct(productId)
        })
    },[id])

    return (
        <ItemDetail product={product}/>
    )
}