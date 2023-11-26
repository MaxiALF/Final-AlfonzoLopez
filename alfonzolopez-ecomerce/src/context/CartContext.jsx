import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [ cartList, setCartlist ] = useState([])

    const addToCart = (product) => {

        if (cartList.find(item => item.id === product.id)){
            const products = cartList.map(item => 
                item.id === product.id ? {...item, cant : item.cant + product.cant } : item)

            return setCartlist([...products])
        }

        setCartlist ([ ...cartList, product ])
    }

    const deleteProduct = (product) => {
        const result = cartList.filter(item => item.id !== product.id)
        setCartlist(result) 
    }
    
    const total = () => cartList.reduce((added, productObj) => added = added + (productObj.price * productObj.cant), 0 )

    const deleteCart = () => {
        setCartlist([])
    }

    const cartItemCount = () => cartList.reduce((total, product) => total + product.cant, 0)
    
    return(
        <CartContext.Provider value={{ cartList, addToCart, deleteProduct, deleteCart, total, cartItemCount }}>
            {children}
        </CartContext.Provider>
    ) 
}