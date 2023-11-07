import { Link } from "react-router-dom"

export const Item = ({product}) => {
    return (
        <div className="card w-25">
            <img src={product.img} className="card-img-top"/>
            <div className="card-body">
                <h3>{product.name}</h3> 
                <p>Precio:{product.price}</p>  
                <p>Descripcion:{product.description}</p> 
            </div>
            <div className="card-footer">
                <Link to= {`/detail/${product.id}`}>
                    <button className="btn btn-outline-dark w-100">+Info</button>
                </Link>
            </div>
        </div>
    )
} 