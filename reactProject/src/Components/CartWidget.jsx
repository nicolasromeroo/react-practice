// import Contexto from './Components/Contexto'



const CartWidget = ({ imagen, cantidad }) => {
    return (
        <>
            <div className="calendarContainer">
                <img className="rounded-circle" src={imagen} />
                <p className="rounded-circle">{cantidad}</p>
            </div>
        </>
    )
}

export default CartWidget