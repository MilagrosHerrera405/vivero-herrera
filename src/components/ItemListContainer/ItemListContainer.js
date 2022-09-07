/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import   './ItemListContainer.css';
// import '../ItemDetailContainer/ItemDetailContainer.css';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { arregloProductos } from '../baseDatos/baseDatos';
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ texto }) => {
	const {tipoProducto} = useParams();
    console.log(tipoProducto);

	const [productos, setProductos] = useState([]);

    const prom = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
        }, 3000);
    });

	useEffect(() => {
		prom.then((res) =>{
			if(!tipoProducto){
				setProductos(res)
			}else{
                const nuevaLista = res.filter(item=>item.categoria === tipoProducto);
				setProductos(nuevaLista)
	        }
        })
	}, [])
	console.log('productos', productos)

	return (
		<div className="item-list-container">
		<p>item list container</p>
		<ItemList productos={productos}/>
	</div>
	);
};

export default ItemListContainer;
