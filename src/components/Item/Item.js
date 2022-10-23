import './Item.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ unProducto }) => {
	return (
		<div className='film'>
			<div className='card text-center'>
				<p className='title'>{unProducto.title}</p>
				<img className='card-img-top' src={unProducto.pictureUrl} alt='' />
				<div className='card-body text light'>
					<div className='btn btn-outline-success'>Ver detalle del producto</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
