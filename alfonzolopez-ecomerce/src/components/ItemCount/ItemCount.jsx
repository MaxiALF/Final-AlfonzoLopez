import './ItemCount.css'
import { useState } from 'react' 

const ItemCount = ({stock , initial, onAdd}) => {
    const [ quantity, setQuantity] = useState (initial)

    const more = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const less = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className= 'Counter'>
            <div className= 'Controls'>
                <button className= "Button" onClick={less}>-</button>
                <h4 className= 'Number'>{quantity}</h4>
                <button className= "Button" onClick={more}>+</button>
            </div>
            <div>
                <button className= "Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default ItemCount