import Item from '../Item/Item';
import './ItemList.css';

export const ItemList = ({ productos }) => {
	
    
    return(
        <div className="estilos-listado"> 
        <div style={{width:"10%"}}>item list</div>
            {
                productos.map(producto=>(
                    // <Link key={producto.id} to={`/productos/${producto.id}`}>
                        <Item unProducto={producto}/>
                    // </Link>
                ))
            }
        </div>
    )
};

export default ItemList;
