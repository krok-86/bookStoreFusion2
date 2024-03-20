import { useState, type FC } from 'react';
import type { BookListType } from '../../../types/types';
import CartListStyled from './CartListStyled';
import { URLS } from '../../../constants/constants';
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, InputNumber } from 'antd';

const CartList: FC<BookListType> = ({ book }) => {
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
    <CartListStyled>
      <div className="book-card">
        <div className="book-pic-wrapper">
          <img
            className="book-pic"
            src={`${URLS.MAINURL}${book?.picture}`}
            alt=""
          />
        </div>
        <div className="book-data">
          <div>
          <div className="book-title">{book?.title}</div>
          <div className="auth-title">{book?.author?.name}</div>
          </div>
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
              onClick={increment}
            >
              <PlusOutlined className="sign" />
            </Button>
            <DeleteOutlined />
          </div>
          <div>
            <div className="price-title">{priceStr}</div>
          </div>
        </div>
      </div>
      {/* <div className="item-block">
        <div className="cover-wrap">
          <img className="cover" src="/images/narnia.jpeg" alt="" />
        </div>
        <div className="title-block">
          <div className="book-title">{book.title}</div>
          <div className="book-author">book?.author?.name</div>
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
              onClick={increment}
            >
              <PlusOutlined className="sign" />
            </Button>
            <DeleteOutlined />
          </div>
          <div className="price">{priceStr}</div>
        </div>
      </div> */}
    </CartListStyled>
  );
};
export default CartList;
