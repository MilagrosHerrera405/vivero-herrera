import React, { useEffect } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../utils/firebase';
import { useState } from 'react';

export const PaginaFirebase = () => {
	const [arregloProductos, setArregloProductos] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const query = collection(db, 'items');
			const response = await getDocs(query);
			const docs = response.docs;
			const data = docs.map((doc) => {
				return { ...doc.data(), id: doc.id };
			});
			setArregloProductos(data);
		};
		getData();
	}, []);

	useEffect(() => {
		const getDocumento = async () => {
			//consulta o referencia
			const query = doc(db, 'items', 'QPecYuDxkskZBr3uoVjI');
			const response = await getDoc(query);
			const producto = {
				...response.data(),
				id: response.id,
			};
			setArregloProductos(producto);
		};
		getDocumento();
	}, []);

	return <div>PaginaFirebase</div>;
};
