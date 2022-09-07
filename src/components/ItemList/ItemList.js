import Item from '../Item/Item';

import React from 'react';
import {Link} from 'react-router-dom';

const ItemList = ({ productos }) => {
	// return productos.map((unProducto) => <Item key={unProducto.id} unProducto={unProducto} />);
	return(
        <div className="estilos-listado">
            <div style={{width:"100%"}}>item list</div>
            {
                productos.map(producto=>(
                    <Link key={producto.id} to={`/productos/${producto.id}`}>
                        <Item unProducto={producto}/>
                    </Link>
                ))
            }
        </div>
    )
};

export default ItemList;
