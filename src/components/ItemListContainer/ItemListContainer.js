/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/firebase';

export const ItemListContainer = () => {
	const { categoria } = useParams();

	console.log('categoria', categoria);

	const [productos, setProductos] = useState([]);

	// const promesa = new Promise((resolve, reject)=>{
	//     setTimeout(() => {
	//         resolve(arregloProductos);
	//     }, 2000);
	// })

	useEffect(() => {
		const getData = async () => {
			try {
				if (!categoria) {
					const query = collection(db, 'items');
					const response = await getDocs(query);
					const docs = response.docs;
					const data = docs.map((doc) => {
						return { ...doc.data(), id: doc.id };
					});
					console.log(data);
					setProductos(data);
				} else {
					const query = (collection(db, 'items'), where('categoria', '==', categoria));
					const response = await getDocs(query);
					const docs = response.docs;
					const data = docs.map((doc) => {
						return { ...doc.data(), id: doc.id };
					});
					console.log(data);
					setProductos(data);
					// let queryRef = !categoria
					// 	? collection(db, 'items')
					// 	: query(collection(db, 'items'), where('categoria', '==', categoria));
					// const response = await getDocs(queryRef);
					// console.log(response.docs);
					// const datos = response.docs.map((doc) => {
					// 	const newDoc = {
					// 		...doc.data(),
					// 		id: doc.id,
					// 	};
					// 	return newDoc;
					// });
					// setProductos(datos);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	return (
		<div className='item-list-container'>
			<p>item list container</p>
			<ItemList productos={productos} />
		</div>
	);
};

export default ItemListContainer;
