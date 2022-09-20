import React, { useEffect }  from 'react';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../utils/firebase";
import { useState } from 'react';


export const PaginaFirebase = () => {
	const [arregloProductos, setArregloProductos] = useState([]);

	useEffect(() =>{
		const getData = async ()=>{
			const query = collection(db,"items");
			const response = await getDocs(query);
			const docs = response.docs;
			const data = docs.map(doc=>{return{...doc.data(), id:doc.id}})
			setArregloProductos(data);
		}
		getData()
	},[]);


	return <div>PaginaFirebase</div>;
};


