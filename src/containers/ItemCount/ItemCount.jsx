import { useCount } from "../../hooks/useCount.jsx";

export const ItemCount = ({initialValue, min, max, onAdd}) => {
    const {count, minus, sum, reset} = useCount(initialValue, min, max)

    return (
        <>
            <button className="btn btn-dark" onClick={minus}>-</button>
            {count}
            <button className="btn btn-dark" onClick={sum}>+</button>
            <button className="btn btn-dark" onClick={reset}>Reset</button>
            <button className="btn btn-light" onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </>
    )
}