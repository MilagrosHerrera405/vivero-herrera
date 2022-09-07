import { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { arregloProductos } from '../baseDatos/baseDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
	const {productId} = useParams();
    console.log("productId",productId);
	
	const [item, setItem] = useState({});

	const getItem = (id) => {
		return new Promise((resolve, reject) => {
			const product = arregloProductos.find(item=>item.id === parseInt(id));
            resolve(product);
		});
	};

	useEffect(() => {
		const getProducto = async () => {
			const producto = await getItem();
			console.log('producto', producto);
			setItem(producto);
		};
		getProducto();
	});

	console.log('item:', item);
	return (
		<div className='item-detail-container'>
			<p style={{ width: '100%', color: 'white' }}>item detail container</p>
			<ItemDetail item={item} />
		</div>
	);
};

export default ItemDetailContainer;
