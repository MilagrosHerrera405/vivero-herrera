import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { db } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const CartContainer = () => {
	const { productCartList, clearProductCartList, getTotalPrice } = useContext(CartContext);
	console.log(productCartList);
	const [idOrder, setIdOrder] = useState('');
	const [compra, setCompra] = useState('');

	function whatToRender() {
		if (productCartList.length > 0 && compra === '') {
			return (
				<>
					{productCartList.map((item) => (
						<CartItem key={item.id} item={item} />
					))}
					<hr />
					<button onClick={clearProductCartList}>Vaciar el carrito</button>
					<form onSubmit={sendOrder}>
						<input type='text' placeholder='nombre' />
						<input type='text' placeholder='telefono' />
						<input type='email' placeholder='email' />
						<button type='submit'>enviar orden</button>
					</form>
				</>
			);
		}
		if (productCartList.length === 0 && compra !== '') {
			return (
				<>
					<p>Compra realizada con exito</p>
					<p>El id de tu orden es: {idOrder}</p>
				</>
			);
		}
		if (productCartList.length === 0 && compra === '') {
			return (
				<>
					<p>El carrito esta vacio</p>
				</>
			);
		}
	}
	const sendOrder = (e) => {
		e.preventDefault();
		const order = {
			buyer: {
				name: e.target[0].value,
				phone: e.target[1].value,
				email: e.target[2].value,
			},
			items: productCartList,
		};
		//crear referencia en la base de datos de donde voy a guardar el documento
		const queryRef = collection(db, 'orders');
		//agregamos el documento
		addDoc(queryRef, order).then((respuesta) => {
			setIdOrder(respuesta.id);
			clearProductCartList();
			setCompra('Compra realizada con exito');
		});
	};

	return (
		<div>
			<div>{whatToRender()}</div>
		</div>
	);
};

export default CartContainer;
