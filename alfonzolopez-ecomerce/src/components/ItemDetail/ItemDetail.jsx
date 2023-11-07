import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail = ({ product }) => {

    const onAdd = cantidad => {
        console.log('cantidad:', cantidad)
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
                <p>Descripcion: {product.description}</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </div>            
        </div>
    )  
}