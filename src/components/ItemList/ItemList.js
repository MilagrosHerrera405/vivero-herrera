import Item from '../Item/Item';
import './ItemList.css';

import React from 'react';
import {Link} from 'react-router-dom';

const ItemList = ({ productos }) => {
	// return productos.map((unProducto) => <Item key={unProducto.id} unProducto={unProducto} />);
	return(
        <div> ItemList
        <div className="estilos-listado">
            {
                productos.map(producto=>(
                    // <Link key={producto.id} to={`/productos/${producto.id}`}>
                        <Item unProducto={producto}/>
                    // </Link>
                ))
            }
        </div>
        </div>
    )
};

export default ItemList;
