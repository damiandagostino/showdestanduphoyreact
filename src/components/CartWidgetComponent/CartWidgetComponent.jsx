import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidgetComponent = () => {

    const {qtyItems} = useContext(CartContext);

    const iconStyle = {
        padding: '5px',
        color: '#fafafa',
        fontSize: '1.3rem',
    }

    return(
        <div>
            <i className="bi bi-cart4"style={iconStyle}></i>
            <span>{qtyItems}</span>
        </div>
    )
}

export default CartWidgetComponent;