import useCart from "../hooks/useCart"

export default function AddToCart() {
    const { addToCart } = useCart()

    return (
        <button onClick={() => addToCart()}>AddToCart</button>
    )
}