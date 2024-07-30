


import React, { useEffect, useState } from 'react';
import cabalango from '../assets/img/cabalango.jpg';
import capital from '../assets/img/capital.jpg';
import elDurazno from '../assets/img/elDurazno.jpg';
import losReartes from '../assets/img/losReartes.jpg';
import avion from '../assets/img/avion.png';
import articulosDestacados from "../json/articulosDestacados.json"
import { doc, getDocs, getFirestore, collection } from "firebase/firestore"


function Body() {
    const [items, setItems] = useState([])

    // accediendo a documentos de firestore
    // useEffect(() => {
    //     const db = getFirestore()
    //     const docRef = doc(db, "items", "EuM5IOZ1OTFsbiJ9VBQt")
    //     getDoc(docRef).then(documento => {
    //         if (documento.exists()) {
    //             setItems({ id: documento.id, ...documento.data() })
    //         } else {
    //             console.error("ERROR")
    //         }
    //     })
    // }, [])

    //accediendo a una coleccion
    useEffect(() => {
        const db = getFirestore()
        const itemCollection = collection(db, "items")
        getDocs(itemCollection).then(snapShot => {
            if (snapShot.docs.lenght > 0) {
                setItems(snapShot.docs.map(documento => ({ id: documento.id, ...documento.data() }))) 
                console.log(items)   
            } else {
                console.error("no existe la coleccion")
            }
        })

    })

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={items.img} className="card-img-top" alt={items.nombre} />
                        <div className="card-body">
                            <p className="card-text">{items.nombre} <br/>
                            {items.precio}
                            </p>
                            <button className="btn btn-primary">Reservar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

        // <section className='bodyContainer'>
        //     <img src={avion} className="avion d-none" alt="avion" />
        //     <h2 className='w-5'>Mirá algunos de nuestros destinos destacados</h2>

        //     <section className="cardContainer">
        //         <div className="card" style={{ width: '18rem' }}>
        //             <img src={cabalango} className="card-img-top" alt="cabalango" />
        //             <div className="card-body">
        //                 <h5 className="card-title">Cabalango, Córdoba</h5>
        //                 <p className="card-text">Cabalango es una villa serrana del departamento Punilla, a 8 km al sureste de Tanti y a 12 km al oeste de Villa Carlos Paz, sobre el arroyo Los Chorrillos.</p>
        //                 <button className="btn btn-primary">Reservar</button>
        //             </div>
        //         </div>

        //         <div className="card" style={{ width: '18rem' }}>
        //             <img src={capital} className="card-img-top" alt="capital" />
        //             <div className="card-body">
        //                 <h5 className="card-title">Capital, Córdoba</h5>
        //                 <p className="card-text">La capital de la provincia argentina del mismo nombre, es conocida por su arquitectura colonial española. Alberga la Manzana Jesuítica, un complejo del siglo XVII con claustros activos, iglesias y el campus original de la Universidad Nacional de Córdoba.</p>
        //                 <button className="btn btn-primary">Reservar</button>
        //             </div>
        //         </div>

        //         <div className="card" style={{ width: '18rem' }}>
        //             <img src={elDurazno} className="card-img-top" alt="el durazno" />
        //             <div className="card-body">
        //                 <h5 className="card-title">El Durazno, Córdoba</h5>
        //                 <p className="card-text">El Durazno es una localidad del Departamento Calamuchita, provincia de Córdoba, Argentina. A partir del 3 de junio de 2010 pasó a formar parte del radio municipal de la localidad de Villa Yacanto, según consta en el Boletín Oficial.​</p>
        //                 <button className="btn btn-primary">Reservar</button>
        //             </div>
        //         </div>

        //         <div className="card" style={{ width: '18rem' }}>
        //             <img src={losReartes} className="card-img-top" alt="los reartes" />
        //             <div className="card-body">
        //                 <h5 className="card-title">Los Reartes, Córdoba</h5>
        //                 <p className="card-text">Los Reartes es una comuna situada en el departamento Calamuchita, provincia de Córdoba, Argentina. </p>
        //                 <button className="btn btn-primary">Reservar</button>
        //             </div>
        //         </div>
        //     </section>
        // </section>
    )
}

export default Body