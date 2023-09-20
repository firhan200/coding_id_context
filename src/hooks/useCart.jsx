import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function useCart(){
    const cartContext = useContext(CartContext)

    return cartContext
}