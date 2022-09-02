import React, { useEffect, useState } from 'react';
import { Container, Catalogo } from './ItemListContainer.elements';
import '../ItemDetailContainer/ItemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { arregloProductos } from '../baseDatos/baseDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
	const [item, setItem] = useState({});

	const getItem = () => {
		return new Promise((resolve, reject) => {
			resolve(arregloProductos[0]);
		});
	};

	useEffect(() => {
		const getProducto = async () => {
			const producto = await getItem();
			console.log('producto', producto);
			setItem(producto);
		};
		getProducto();
	}, []);

	console.log('item:', item);
	return (
		<div className='item-detail-container'>
			<p style={{ width: '100%', color: 'white' }}>item detail container</p>
			<ItemDetail item={item} />
		</div>
	);
};

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(arregloProductos);
			}, 3000);
		});

		getData.then((res) => setData(res));
	}, []);

	const onAdd = (quantity) => {
		console.log(`Compraste ${quantity} unidades`);
	};

	return (
		<Container>
			<Catalogo>
				<h1>Texto provisional</h1>
			</Catalogo>
			<ItemCount initial={1} stock={5} onAdd={onAdd} />
			<ItemList productos={data} />
		</Container>
	);
};

export default ItemListContainer;
