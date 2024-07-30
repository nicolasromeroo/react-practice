import { useEffect, useState } from "react"


// const Boton = () => {
//     const [visible, setVisible] = useState(true)

//     const quitarComponente = () => {
//         setVisible(false)
//     }

//     return (
//         <>
//             <button className="btn btn-primary" onClick={quitarComponente}>Quitar componente</button>
//             {visible ? <Texto /> : ""}
//         </>
//     )
// }
// const Texto = () => {
//     const redimensionar = () => {
//         console.log("Hiciste un resize en el Navegador!")
//     }

//     window.addEventListener("resize", redimensionar)

//     useEffect(() => {
//         return () => {
//             window.removeEventListener("resize", redimensionar)
//         }
//     })

// }
const Eventos = () => {

    const capturarEvento = (e) => {
        console.log(e.nativeEvent)
    }

    return (
        <>
            <div>
                <div className="row">
                    <div className="col">
                        <h1>Eventos</h1>
                        <button className="btn btn-primary" onClick={(e) => {capturarEvento(e)}}>Capturar evento</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eventos