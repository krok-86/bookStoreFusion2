import { FC } from "react";
import EmptyCartStyled from "./EmptyCart.styled";
import { ADD_ITEMS, EMPTY, GO_CATALOG, GO_TO } from "../../../constants";

const EmptyCart: FC = () => {
  return (
    <EmptyCartStyled>
      <div className="empty">{EMPTY}</div>
      <div className="title-block">
        <div className="title">{ADD_ITEMS}</div>
        <div className="title">{GO_TO}</div>
      </div>
      <div className="go-button">{GO_CATALOG}</div>
      <div className="cover-wrap">
        <img className="cover" src="/images/stack book.png" alt=""/>
      </div>
    </EmptyCartStyled>
  );
};
export default EmptyCart;
