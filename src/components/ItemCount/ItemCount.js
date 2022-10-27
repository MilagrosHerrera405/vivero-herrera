import React, { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));

	const decrease = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const increase = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	// useEffect(() =>{
	//     setCount(parseInt(initial));
	// },[initial])

	return (
		<div className='counter'>
			<p>Stock disponible: {stock}</p>
			<div className='contenedorControles'>
				<button type='button' className='btn btn-success' disabled={stock === 0} onClick={decrease}>
					-
				</button>
				<p>{count}</p>
				<button type='button' className='btn btn-success' disabled={stock === 0} onClick={increase}>
					+
				</button>
			</div>
			<button type='button' className='btn btn-success mt-2' disabled={stock === 0} onClick={() => onAdd(count)}>
				Agregar al carrito
			</button>
		</div>
	);
};

export default ItemCount;
