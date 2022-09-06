import React, { useState, useEffect} from "react";
import "./ItemCount.css";

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState (parseInt(initial));

    const decrease = () => {
    setCount(count - 1);
};
    const increase = () => {
    setCount(count + 1);
    };

    useEffect(() =>{
        setCount(parseInt(initial));
    },[initial])

    return (
    <div className="counter">
        
        <p>Stock disponible: {stock}</p>
        <div className='contenedorControles'></div>
        <button  disabled={stock===0} onClick={decrease} className="estilos">-</button>
        <p>{count}</p>
        <button  disabled={stock===0} onClick={increase} className="estilos">+</button>

        <div>
        <button   disabled={stock===0} onClick={() => onAdd(count)} className="carrito">Agregar al carrito</button>
        </div>
    </div>
    );
};

export default ItemCount;
