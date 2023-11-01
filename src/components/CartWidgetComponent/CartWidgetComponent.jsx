const CartWidgetComponent = () => {
    const iconStyle = {
        padding: '10px',
        color: '#fafafa'
    }

    return(
        <div>
            <i className="bi bi-cart4"style={iconStyle}></i>
            <span>10</span>
        </div>
    )
}

export default CartWidgetComponent;