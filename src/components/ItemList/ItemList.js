import Item from '../Item/Item';
import './ItemList.css';
import { Link } from 'react-router-dom';

export const ItemList = ({ productos }) => {
	console.log('productos', productos);
	return (
		<div className='estilos-listado'>
			<div style={{ width: '10%' }}>item list</div>
			{productos.map((producto) => (
				<Link key={producto.id} to={`/productos/${producto.id}`}>
					<Item unProducto={producto} />
				</Link>
			))}
		</div>
	);
};

export default ItemList;
