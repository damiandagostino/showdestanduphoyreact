

const ItemListContainer = ({greeting}) => {
    const greetingStyles ={
        fontSize: '2.5rem',
        textAlign: 'center',
        color: '#fafafa',
        marginTop: '20px'
    }
    return(
        <div style={greetingStyles}>
            {greeting}
        </div>
    )
}

export default ItemListContainer