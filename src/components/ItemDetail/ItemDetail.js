import { useState } from 'react';
import { useContext } from 'react';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';



export const ItemDetail = ({ item }) => {
	const {addProduct} = useContext(CartContext);
	const [quantity, setQuantity] = useState(0);
	
	
	const onAdd = (count)=>{
        addProduct(item,count);
        setQuantity(count);
    }

	return (

		<div className='detail-container'>
			<p style={{ width: '100%' }}>item detail</p>
			<div className='img-container'>
				<img src={item.pictureUrl} alt={item.title} />
			</div>
			<div className='img-container'>
				<h4>{item.title}</h4>
				<h5>$ {item.price}</h5>
				<p>{item.description}</p>
			</div>
			<ItemCount initial={1} stock={10} onAdd={onAdd}/>
			{
                quantity>0 &&
                <Link to="/cart">
					
                    <button  type="button" class="btn btn-success">Ir al carrito</button>
                </Link>
            }
		</div>
	);
};
export default ItemDetail;
