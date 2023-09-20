import { createContext, useState } from "react";

//ini cara bikin context
export const CartContext = createContext({
    totalCart: 1
})

export const CartProvider = ({ children }) => {
    const [totalCart, setTotalCart] = useState(0)

    const addToCart = () => {
        setTotalCart(totalCart+1)
    }
    
    return (
        <CartContext.Provider value={{
            totalCart,
            addToCart
        }}>
            { children }
        </CartContext.Provider>
    )
}