import Item from '../Item/Item';
import React from 'react';

const ItemList = ({ productos }) => {
	return productos.map((unProducto) => <Item key={unProducto.id} unProducto={unProducto} />);
};

export default ItemList;
