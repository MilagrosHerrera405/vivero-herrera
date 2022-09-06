import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
	return (
		<>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<ItemListContainer />}/> 
				<Route path='/category/:id' element={<ItemListContainer />}/> 
				<Route path='/cart' element={<Cart/>}/> 
				<Route path='/item/:id' element={<ItemDetailContainer />}/> 
			</Routes>
		</BrowserRouter>
		</>
	);
}

export default App;
