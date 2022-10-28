import './Item.css';
import React from 'react';

const Item = ({ unProducto }) => {
	return (
		<div className='film'>
			<div className='card text-center'>
				<div className='row'>
					<p className='title'>{unProducto.title}</p>
				</div>
				<div className='row'>
					<div className='col-12 align-center'>
						<img className='card-img-top' src={unProducto.pictureUrl} alt='' />
					</div>
				</div>
				<div className='card-body text light'>
					<div className='row'>
						<div className='col-12 align-items-end'>
							<div className='btn btn-outline-success'>Ver detalle del producto</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
