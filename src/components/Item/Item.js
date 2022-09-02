import './Item.css';
import React from 'react';

const Item = ({ unProducto }) => {
	return (
		<div className='film'>
			<div className='card text-center'>
				<p className='title'>{unProducto.title}</p>
				<img className='card-img-top' src={unProducto.pictureUrl} alt='' />
				<div className='card-body text light'>
					<a href={'/'} className='btn btn-outline-success'>
						Ver detalle del producto
					</a>
				</div>
			</div>
		</div>
	);
};

export default Item;
