import { useContext, useEffect, useState } from "react";
import arrayVuelos from "../json/articulos.json";
import { useParams } from "react-router-dom";
import { ContextoReservas } from './Contexto';

const Vuelos = () => {
    const [items, setItems] = useState(arrayVuelos);
    const { idPais } = useParams();
    const { carritoDeReservas, agregarReserva, totalReservas, vaciarCarritoDeReservas } = useContext(ContextoReservas);

    useEffect(() => {
        setItems(idPais ? arrayVuelos.filter(item => item.pais == idPais) : arrayVuelos);
    }, [idPais]);

    return (
        <div className="container my-5">
            <div className="row">
                {items.map(item => (
                    <div key={item.id} className="col-md-3 mb-3">
                        <div className="card">
                            <img src={item.img} className="card-img-top" alt={item.hospedaje} />
                            <div className="card-body text-center">
                                <h2>{item.hospedaje}</h2>
                                <h5>{item.pais}</h5>
                                <p className="card-text">{item.descripcion}</p>
                                <button className="btn btn-primary" onClick={() => agregarReserva(item.id)}>Agregar (+)</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col">
                    <h3>Cantidad de reservas: {totalReservas()}</h3>
                </div>
            </div>
        </div>
    );
};

export default Vuelos;
