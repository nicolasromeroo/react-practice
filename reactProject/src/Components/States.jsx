import { useState } from "react"

const States = () => {
    const [texto, setTexto] = useState("curso de javascript")

    const modificarTexto = () => {
        setTexto("Curso de REACT JS")
    }

    return(
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>States</h1>
                    <p><button onClick={modificarTexto}>modificar texto</button></p>
                    <p>{texto}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default States