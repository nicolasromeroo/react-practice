import { useEffect, useState } from "react"

const CompUseEffect = () => {
    const [cont, setCont] = useState(0)
    const [cont2, setCont2] = useState(0)

    const Incrementar = () => {
        setCont(cont + 1)
    }

    const Incrementar2 = () => {
        setCont2(cont2 + 1)
    }

    // OPCION 1 : SIN ARRAY
    // useEffect(() => {
    //     console.log("console 2")
    // }, []) // sin array de dep

    // // console.log("console 1")

    //   // OPCION 2 : CON ARRAY DE DEPENDENCIA
    //    useEffect(() => {
    //     console.log("console 2")
    //    }, [cont])

    //    console.log("console 1")

    // OPCION 3 : DIRECTAMENTE SIN PASARLE EL SEGUNDO PARAMETRO DE ESTADO

    useEffect(() => {
        console.log("console 1")
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>USEEFFECT</h1>
                    <p>Contador: {cont}</p>
                    <p>Contador 2: {cont2}</p>
                    <p><button className="btn btn-primary" onClick={Incrementar}>Incrementar contador 1 (+)</button></p>
                    <p><button className="btn btn-primary" onClick={Incrementar2}>Incrementar contador 2 (+)</button></p>
                </div>
            </div>
        </div>
    )
}

export default CompUseEffect