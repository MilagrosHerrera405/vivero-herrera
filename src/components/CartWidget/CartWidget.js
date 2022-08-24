import {
  Container,
  LogoContainer2,
} from "./CartWidget.elements";

import { HiOutlineShoppingCart } from "react-icons/hi";

const CartWidget = () => {
  return (
    <Container>
      <LogoContainer2>
        <HiOutlineShoppingCart />
      </LogoContainer2>
    </Container>
  );
};

export default CartWidget;
