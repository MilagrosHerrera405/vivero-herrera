import React from "react";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



export const Cart = () => {
	const {productCartList, deleteProduct} = useContext(CartContext);
	console.log('productCartList',productCartList)



	
	
	
	
	return(
		<div>
			<p>Cart</p>
			{
        productCartList.map(item=>(
          <div>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <button onClick={()=>deleteProduct(item.id)}>Eliminar producto</button>
          </div>
        ))
      }
		</div>
	)
}

export default Cart