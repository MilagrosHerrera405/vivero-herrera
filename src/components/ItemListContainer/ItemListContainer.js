import React, { useEffect, useState } from 'react';
import   './ItemListContainer.elements';
// import '../ItemDetailContainer/ItemDetailContainer.css';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { arregloProductos } from '../baseDatos/baseDatos';
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ texto }) => {
	const {tipoProducto} = useParams();
    console.log(tipoProducto)
    const [productos, setProductos] = useState([]);

    const Promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
        }, 3000);
    })

	useEffect(() => {
		Promise.then((res) =>{
			if(!tipoProducto){
				setProductos(res)
			}  else{
                const nuevaLista = res.filter(item=>item.categoria === tipoProducto);
				setProductos(nuevaLista)
	}

})
	},[tipoProducto])
	console.log('productos', productos)

	return (
		<ItemList>
		<p>item list container</p>
		<ItemList items={productos}/>
	</ItemList>
	);
};

export default ItemListContainer;
