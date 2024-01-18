import { FC, useState } from "react";
import CartItemStyled from "./CartItemStyled";
import { IBook } from "../../../../types";
import { Button, InputNumber } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

interface IBookCartItem {
  book: IBook;
}
const CartItem: FC<IBookCartItem> = ({ book }) => {
  const priceStr = `$ ${book.price} USD`;

  const [value, setValue] = useState(1);

  const increment = () => {
    if (value !== 9) {
      setValue(value + 1);
    }
  };
  const decrement = () => {
    if (value !== 1) {
      setValue(value - 1);
    }
  };
  return (
    <CartItemStyled>
      <div className="item-block">
        <div className="cover-wrap">
          <img className="cover" src="/images/narnia.jpeg" />
        </div>
        <div className="title-block">
          <div className="book-title">{book.title}</div>
          <div className="book-author">{book.author}</div>
          <div className="increment-block">
            <Button
              className="button-sign"
              //    style={{ backgroundColor: "#EF4444", borderColor: "#EF4444" }}
              onClick={decrement}
            >
              <MinusOutlined className="sign" />
            </Button>
            <InputNumber
              className="ant-input-number-input"
              //    status
              readOnly
              //    onChange={setValue}
              min={1}
              max={9}
              value={value}
            />
            <Button
              className="button-sign"
              //    style={{ backgroundColor: "#22C55E", borderBlockColor: "#22C55E" }}
              onClick={increment}
            >
              <PlusOutlined className="sign" />
            </Button>
            <DeleteOutlined />
          </div>
          <div className="price">{priceStr}</div>
        </div>
      </div>
    </CartItemStyled>
  );
};
export default CartItem;
