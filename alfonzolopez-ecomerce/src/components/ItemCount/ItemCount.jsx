import { useCount } from "../Hooks/useCount"

export const ItemCount = ({initial=1, stock=12, onAdd}) => {
    const {counter, handMore, handLess} = useCount(initial, stock)

    const handOnAdd = () => {
        onAdd(counter)
    }
    return(
        <div className="text-center">
            <div>
                <p>{counter}</p>
            </div>
            <div>
                <button className='btn btn-success' onClick={handMore}>+</button>
                <button className='btn btn-success' onClick={handLess}>-</button>
                <button className='btn btn-success' onClick={handOnAdd}>Agregar</button>
            </div>
        </div>
    )
}