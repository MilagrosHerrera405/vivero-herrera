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
      </LogoContainer2>
    </Container>
    </div>
  );
};

export default CartWidget;
