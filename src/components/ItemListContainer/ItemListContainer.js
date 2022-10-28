/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/firebase';

export const ItemListContainer = () => {
	const { categoria } = useParams();
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
					setProductos(data);
				} else {
					const queryRef = collection(db, "items");
					const q = query(queryRef, where('categoria', '==', categoria));
					const response = await getDocs(q);
					const docs = response.docs;
					const data = docs.map((doc) => {
						return { ...doc.data(), id: doc.id };
					});
					setProductos(data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	return (
		<div className='item-list-container'>
			<ItemList productos={productos} />
		</div>
	);
};

export default ItemListContainer;
