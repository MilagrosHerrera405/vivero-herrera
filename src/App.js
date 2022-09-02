import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
	return (
		<>
			<Navbar />
			<ItemDetailContainer />
			<ItemListContainer />
		</>
	);
}

export default App;
