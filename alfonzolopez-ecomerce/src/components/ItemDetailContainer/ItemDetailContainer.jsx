import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../Tools/mFetch"
import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const { pid } = useParams()
    
    useEffect(() => {
        mFetch(pid) 
        .then(result => setProduct(result))
        .catch(error => console.log(error))
    }, [])

    const onAdd = cant => {
        console.log('añadido:', cant)
    }

    return (
        <div className="row">
            <div className="col-6 mt-5">
                <img src={product.img} alt="" className="img-fluid"/>
            </div>
            <div className="col-6 text-center mt-5">
                <p>Nombre: {product.name}</p>
                <p>Category: {product.category}</p>
                <p>Precio: {product.price}</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </div>            
        </div>
    ) 
} 

export default ItemDetailContainer