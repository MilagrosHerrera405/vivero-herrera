import Item from '../Item/Item';
import './ItemList.css';
import React from 'react';
import {Link} from 'react-router-dom';

const ItemList = ({ productos }) => {
	// return productos.map((unProducto) => <Item key={unProducto.id} unProducto={unProducto} />);
	return(
        <div className="estilos-listado">
            <div style={{width:"100%"}}>item list</div>
            {
                productos.map(producto=>(
                    <Link key={producto.id} to={`/item/${producto.id}`}>
                        <Item item={producto}/>
                    </Link>
                ))
            }
        </div>
    )
};

export default ItemList;
