import { useRef, useState } from "react"

const ComponenteUseRef = () => {
    const [titulo, setTitulo] = useState("TDH VIAJES")
    const divRef = useRef(null)

    function modificarContenido() {
        setTitulo("NR Viajes")
        divRef.current.innerHTML = "Curso"
        divRef.current.className = "text-success d-flex"
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>USEREF en nr viajes</h1>
                    <p>{titulo}</p>
                    <p ref={divRef}></p>
                    {/* <p>parrafo Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum. Nesciunt blanditiis deserunt sunt, aliquid, earum atque corrupti dignissimos amet minus cupiditate quae doloremque explicabo illo eius velit maiores iust</p> */}
                    <p><button className="btn btn-primary" onClick={modificarContenido}>Corregir contenido</button></p>
                </div>
            </div>
        </div>
    )
}

export default ComponenteUseRef