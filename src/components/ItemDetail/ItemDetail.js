import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';


export const ItemDetail = ({ item }) => {
	const onAdd = (count)=>{
        console.log("onAdd", count)
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
		</div>
	);
};
export default ItemDetail;
