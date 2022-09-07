import './App.css';
import React from 'react';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
	return (
		
		<BrowserRouter>
		<div className="App">
			<Navbar />
			<div>
			<Routes>
				<Route path='/' element={<ItemListContainer />}/> 
				<Route path='/category/:id' element={<ItemListContainer/>}/>  
				<Route path='/productos' element={<ItemDetailContainer/>}/> 
				<Route path='/cart' element={<Cart/>}/>
				{/* <Route path='*' element={<ItemListContainer />}/> */}
			</Routes>
			</div>
        </div>
		</BrowserRouter>
		
	);
}

export default App;
