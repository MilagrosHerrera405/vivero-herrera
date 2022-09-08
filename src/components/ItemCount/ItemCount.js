import React, { useState, useEffect} from "react";
import "./ItemCount.css";

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState (parseInt(initial));

    const decrease = () => {
        if(count>1){
            setCount(count-1)
        }
    }


const increase = () => {
    if(count<stock){
        setCount(count+1)
    }
}

    // useEffect(() =>{
    //     setCount(parseInt(initial));
    // },[initial])

    return (
    <div className="counter">
        <p>Stock disponible: {stock}</p>
        <div className='contenedorControles'>      
        <button  disabled={stock===0} onClick={decrease} className="estilos">-</button>
        <p>{count}</p>
        <button  disabled={stock===0} onClick={increase} className="estilos">+</button>

        </div>
        <button   disabled={stock===0} className="carrito" onClick={() => onAdd(count)} >Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;
