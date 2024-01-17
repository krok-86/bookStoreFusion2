import { FC } from "react";
import CartStyled from "./Cart.styled";

const Cart: FC = () => {
    return (
<CartStyled>
    <div className="item-block">
    <img className="banner-transp" src="/images/books.svg" />
        <div className=""></div>
        <div className=""></div>
        <div className="">
        <div className=""></div>
        <div className=""></div>
        </div>
        <div className=""></div>
    </div>
</CartStyled>
    )
}
export default Cart;