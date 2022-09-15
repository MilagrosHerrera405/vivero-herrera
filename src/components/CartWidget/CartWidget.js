import {Container, LogoContainer2} from "./CartWidget.elements";
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";

const CartWidget = () => {
  const {getTotalProducts, productCartList} = useContext(CartContext);

  return (
    <div> 
      {  
       productCartList.length>0 &&
       <>
    <Container>
      <LogoContainer2>
        <Link to="/cart"> 
        <HiOutlineShoppingCart />
        </Link>
        <span style={{backgroundColor: 'white', borderRadius:"50%", width:"10px", heigth:"10px", fontSize:"10px", color:"black"}}>
                        {getTotalProducts()}
                    </span>
      </LogoContainer2>
    </Container>
    </>
     }
    </div>
  );
};

export default CartWidget;
