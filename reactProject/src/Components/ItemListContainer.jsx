
import { useEffect, useState } from "react"
import articulosDestacados from "../json/articulosDestacados.json"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemListContainer = ({ titulo, subtitulo, parrafo }) => {
    const [items, setItems] = useState([])

    // useEffect(() => {
    //     const promesa = new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(articulosDestacados)
    //         }, 2000)
    //     })

    //     promesa.then(response => {
    //         setItems(response)
    //     })
    // }, [])

    // accediendo a documentos de firestore

    // useEffect(() => {
    //     const db = getFirestore()
    //     const docRef = doc(db, "items", "EuM5IOZ1OTFsbiJ9VBQt")
    //     getDoc(docRef).then(documento => {
    //         console.log(documento)
    //     })
    // }, [])

    return (
        <div className="p-5 wallpaperContainer">
            <div className="row">
                <div className="col text-center presContainer">
                    <h1 className="tituloILC">{titulo}</h1>
                    <h2 className="subtituloILC">{subtitulo}</h2>
                    <p className="parrafoILC">{parrafo}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer