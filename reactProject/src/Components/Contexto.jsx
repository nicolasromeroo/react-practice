import { createContext, useState } from "react";
import arrayVuelos from "../json/articulos.json";

// Creación del contexto
export const ContextoReservas = createContext();

// Componente de proveedor del contexto
const ContextoDeReservas = ({ children }) => {
    const [carritoDeReservas, setCarritoDeReservas] = useState([]);

    const agregarReserva = (id) => {
        const producto = arrayVuelos.find(item => item.id == id);
        setCarritoDeReservas([...carritoDeReservas, producto]);
    };

    const totalReservas = () => {
        return carritoDeReservas.length;
    };

    const vaciarCarritoDeReservas = () => {
        setCarritoDeReservas([]);
    };

    return (
        <ContextoReservas.Provider value={{ carritoDeReservas, agregarReserva, totalReservas, vaciarCarritoDeReservas }}>
            {children}
        </ContextoReservas.Provider>
    );
};

export default ContextoDeReservas;
