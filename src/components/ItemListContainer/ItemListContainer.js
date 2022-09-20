/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
// import '../ItemDetailContainer/ItemDetailContainer.css';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { arregloProductos } from '../baseDatos/baseDatos';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ texto }) => {
	const { tipoProducto } = useParams();
	console.log('tipoProducto', tipoProducto);

	const [productos, setProductos] = useState([]);

	const prom = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arregloProductos);
		}, 3000);
	});

	useEffect(() => {
		prom.then((res) => {
			if (!tipoProducto) {
				setProductos(res);
			} else {
				const nuevaLista = res.filter((item) => item.categoria === tipoProducto);
				setProductos(nuevaLista);
			}
		});
	}, [tipoProducto]);

	console.log('productos', productos);
	return (
		<div className='item-list-container'>
			<p>item list container</p>
			<div className='container m-0 p-0 align-center'>
				<div className='row sarasa'>
					<div className='col-xs-12 col-md-3 figazza'>
						<p className='blanco'>COLUMNA NUMERO 1</p>
					</div>
					<div className='col-xs-12 col-md-8 figazza'>
						<p className='blanco'>COLUMNA NUMERO 2</p>
					</div>
					<div className='col-xs-12 mumbasa'>asdasda</div>
				</div>
				<div className='row mumbasa'>
					<button className='btn btn-warning'>asdasdasda</button>
				</div>
			</div>
			<ItemList productos={productos} />
		</div>
	);
};

export default ItemListContainer;
