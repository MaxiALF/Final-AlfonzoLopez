import './ItemDetail.css'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export const ItemDetail = ({ product }) => {
    const [inputType, setInputType ] = useState ('InputItem')
    const { addToCart } = useCartContext()

    const onAdd = quantity => {
        setInputType('input')
        addToCart( { ...product, quantity } )
    }
    
    return (
        <div className="row d-inline-flex w-100 iDetail">
            <div className="col-6">
                <img src={product.img} alt="" className="img-fluid"/>
            </div>
            <div className="col-6 p-5">
                <p className='fs-2'>{product.name}</p>
                <p>{product.description}</p>
                <p className='fs-4'>${product.price}</p>
                {
                    inputType === 'InputItem' ? 
                    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                    : 
                    <div className="text-center m-2">
                        <Link to='/cart' >
                            <button className="btn btn-outline-success m-2" >Finalizar compra</button>
                        </Link>
                        <Link to='/' >
                            <button className="btn btn-outline-danger m-2" >Continuar comprando</button>
                        </Link>
                    </div>
                }       
            </div>      
        </div>
    ) 
} 