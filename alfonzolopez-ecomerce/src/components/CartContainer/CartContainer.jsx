import { useCartContext } from "../../context/CartContext"
import {Link} from 'react-router-dom'
import './CartContainer.css'

export const CartContainer = () => {

    const { cartList, deleteProduct, deleteCart, total, cartItemCount } = useCartContext() 

    return (
        <div className="CCB m-5">
            <h2> Resumen de compra: </h2>
            { cartList.map(product => <div key={product.id} {...product}>
                                            <div class="table-responsive">
                                                <table class="table-dark m-5">
                                                    <tbody>
                                                        <tr>
                                                            <td><img className="imgFix" src={product.img}/></td>
                                                            <td>---Producto: {product.name} </td> 
                                                            <td>---Precio: ${product.price} </td>
                                                            <td>---Cantidad: {product.quantity} --- </td>
                                                            <td><button onClick={() => deleteProduct (product)} className="btn btn-outline-danger">Eliminar</button></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div> )  }
                                        <div>
                                            {
                                                cartItemCount() === 0 ? 
                                                <div>
                                                    <h1> No se han añadido aún productos al carro </h1>
                                                    <Link to='/'>
                                                        <button className="btn btn-danger w-50" >Volver al inicio </button>
                                                    </Link>
                                                </div>
                                                :
                                                <div>
                                                    <h4 className="m-3 text-center text-warning">Total: ${total()} </h4>
                                                    <button onClick={deleteCart} className="m-3 btn btn-outline-danger">Vaciar carro</button>
                                                    <Link to='/checkout'>
                                                        <button className="m-3 btn btn-outline-success" >Confirmar compra</button> 
                                                    </Link>
                                                </div>
                                            }
                                        </div>
        </div>
    ) 
} 