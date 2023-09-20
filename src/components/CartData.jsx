import useCart from "../hooks/useCart"

export default function CartData() {
    const cartContext = useCart()

    return (
        <>Cart { cartContext.totalCart }</>
    )
}