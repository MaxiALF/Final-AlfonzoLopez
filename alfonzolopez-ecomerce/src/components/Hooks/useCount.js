import { useState } from "react"

export const useCount = (initial, stock) => {
    
    const [counter, setCounter] = useState(initial)

    const handMore = () => {
        if(counter < stock){
            setCounter(counter+1)
        }
    }

    const handLess = () => {
        if(counter > initial){
        setCounter(counter-1)
        }
    }
    return{
        counter,
        handMore,
        handLess
    }
}