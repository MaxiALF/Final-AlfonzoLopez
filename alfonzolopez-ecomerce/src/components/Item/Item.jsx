import { Link } from "react-router-dom"
import './Item.css'

export const Item = ({product}) => {
    return (
        <div className="card w-25 cItem">
            <img src={product.img} className="card-img-top"/>
            <div className="card-body">
                <h3>{product.name}</h3> 
                <p className="fs-5">Categoria: {product.category}</p> 
            </div>
            <div className="card-footer cFooter">
                <p>Precio: ${product.price}</p>  
                <Link to= {`/detail/${product.id}`}>
                    <button className="btn btn-outline-light w-100">+Info</button>
                </Link>
            </div>
        </div>
    )
} 