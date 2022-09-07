import { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { arregloProductos } from '../baseDatos/baseDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
	const {productoId} = useParams();
    
	console.log(productoId);
	
	const [item, setItem] = useState({});

	const getItem = (id) => {
		return new Promise((resolve, reject) => {
			const producto = arregloProductos.find(item=>item.id === parseInt(id));
            resolve(producto);
		});
	};

	useEffect(() => {
		const getProducto = async () => {
			const producto = await getItem(productoId);
			console.log('producto', producto);
			setItem(producto);
		};
		getProducto();
	}, [productoId]);

	
	return (
		<div className='item-detail-container'>
			<p style={{ width: '100%', color: 'white' }}>item detail container</p>
			<ItemDetail item={item} />
		</div>
	);
};

export default ItemDetailContainer;
