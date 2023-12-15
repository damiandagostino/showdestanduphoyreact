import { useContext } from "react";
import { CartContext } from "../../context";


const CartWidgetComponent = () => {

    const {itemCount} = useContext(CartContext);

    const iconStyle = {
        padding: '5px',
        color: '#fafafa',
        fontSize: '1.3rem',
    }

    return(
        <div>
            <i className="bi bi-cart4"style={iconStyle}></i>
            <span>{itemCount}</span>
        </div>
    )
}

export default CartWidgetComponent;