import { useCount } from "../Hooks/useCount"

export const ItemCount = ({initial=1, stock=12, onAdd}) => {
    const {counter, handMore, handLess} = useCount(initial, stock)

    const handOnAdd = () => {
        onAdd(counter)
    }
    
    return(
        <div className="text-center">
            <div className="d-inline-flex m-2">
                <button className='btn btn-success' onClick={handLess}>-</button>
                <p className="m-2">{counter}</p>
                <button className='btn btn-success' onClick={handMore}>+</button>
            </div>
            <div>
                <button className='btn btn-success' onClick={handOnAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}