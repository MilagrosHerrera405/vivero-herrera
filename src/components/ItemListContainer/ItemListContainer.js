import {Container, Catalogo} from "./ItemListContainer.elements";
import ItemCount from "../ItemCount/ItemCount";

export const ItemListContainer = () => {

    const onAdd = (quantity) => {
        console.log('Compraste ${quantity} unidades');
    }

    return (
    <Container>
        <Catalogo>
            <h1>Texto provisional</h1>
        </Catalogo>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </Container>
    );
};

export default ItemListContainer;