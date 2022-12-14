import Item from '../Item/Item';
import './ItemList.css';
import { Link } from 'react-router-dom';

export const ItemList = ({ productos }) => {
	return (
		<div className='estilos-listado'>
			{productos.map((producto) => (
				<Link key={producto.id} to={`/productos/${producto.id}`}>
					<Item unProducto={producto} />
				</Link>
			))}
		</div>
	);
};

export default ItemList;
