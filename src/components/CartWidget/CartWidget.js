import {
  Container,
  LogoContainer2,
} from "./CartWidget.elements";
import {Link} from 'react-router-dom';

import { HiOutlineShoppingCart } from "react-icons/hi";

const CartWidget = () => {
  return (
    <div> 
    <Container>
      <LogoContainer2>
        <Link to="/cart"> 
        <HiOutlineShoppingCart />
        </Link>
        <span style={{backgroundColor: 'white', borderRadius:"50%", width:"10px", heigth:"50px", fontSize:"10px", color:"black"}}>2</span>
      </LogoContainer2>
    </Container>
    </div>
  );
};

export default CartWidget;
