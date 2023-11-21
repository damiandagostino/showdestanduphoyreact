const CartWidgetComponent = () => {
    const iconStyle = {
        padding: '5px',
        color: '#fafafa',
        fontSize: '1.3rem',
    }

    return(
        <div>
            <i className="bi bi-cart4"style={iconStyle}></i>
            <span>15</span>
        </div>
    )
}

export default CartWidgetComponent;