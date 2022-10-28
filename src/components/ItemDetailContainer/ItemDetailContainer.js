import { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { db } from '../../utils/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
	const {productoId} = useParams();
	const [item, setItem] = useState({});

	useEffect(() => {
		const getData = async () => {
			try {
				if (productoId) {
					const docRef = doc(db, "items", productoId);
					const response = await getDoc(docRef);
					const docs = response.data();
					setItem(docs);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	},[productoId]);
	return (
		<div className='item-detail-container'>
			<p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={item}/>
		</div>
	);
};

export default ItemDetailContainer;
