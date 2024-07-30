import { useState } from "react"

export const useCount = (inicial=0, min, max) => {

    if ((inicial < min) || (inicial > max)) {
        min = inicial
    }

    const [contador, setContador] = useState(inicial)

    const incrementar = () => {
        if (contador < max) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > min) {
            setContador(contador - 1)
        }
    }

    const reiniciar = () => {
        setContador(inicial)
    }

    return {contador, incrementar, decrementar, reiniciar}
}
