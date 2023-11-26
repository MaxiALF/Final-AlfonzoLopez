import { useCartContext } from '../../context/CartContext';

export const CartWidget = () => {
        const { cartItemCount } = useCartContext()

        return (
            <div className="d-inline-flex text-light">
                🛒 {cartItemCount()}
            </div>
            )
}

export default CartWidget