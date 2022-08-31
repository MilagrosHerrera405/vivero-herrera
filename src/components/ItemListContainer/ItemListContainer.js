import React, {useEffect, useState} from "react";
import { Container, Catalogo } from "./ItemListContainer.elements";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";



const films = [

  {
    id: 1,
    image: "/plantas/29114c8783d475b392bf957718cb1aa5.jpg",
    title: "Tronco de Brasil",
  },

  {
    id: 2,
    image: "/plantas/05a0a05a947e167671b98feef4d4557a.jpg",
    title: "Helecho",
  },

  {
    id: 3,
    image: "/plantas/6ffcb2bb737b94fec3ff06b7187dc6ee.jpg",
    title: "Potus",
  },

  {
    id: 4,
    image: "/plantas/9ae00ba63df23bf6b585e1511ee7623e.jpg",
    title: "Espatifilo",
  },

  {
    id: 5,
    image: "/plantas/09c42d67aba0dcdbe932484821d99197.jpg",
    title: "Sansevieria",
  },

  {
    id: 6,
    image: "/plantas/17aa024b4488722848000fd1f9ab6c8c.jpg",
    title: "Clivia",
  },

  {
    id: 7,
    image: "/plantas/021c30c9f60fbc5e1dfcf9bfed8a3161.jpg",
    title: "Dischidia",
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData]=useState([]);

  useEffect(() => {
    const getData = new Promise (resolve => {
        setTimeout(() =>{
            resolve(films);
        }, 3000);
    });

    getData.then(res=> setData(res));
  },[])


    const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };

  return (
    <Container>
      <Catalogo>
        <h1>Texto provisional</h1>
      </Catalogo>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      <ItemList data={data}/>
    </Container>
  );
};

export default ItemListContainer;
