import { FC } from "react";
import BookCardSmallStyled from "./BookCardSmall.styled";
import { AUTH_TITLE, BOOK_TITLE, PRICE_BOOK } from "../../constants";
import { Button } from "antd";
import { useState } from 'react';
import { Space, Rate } from 'antd';

const desc = ['1.0', '2.0', '3.0', '4.0', '5.0'];

const BookCardSmall: FC = () => {
    const [value, setValue] = useState(3);
    return (
<BookCardSmallStyled>
    <div className="book-card">
    <div className="book-pic-wrap">
    <img className="book-pic" src="/images/narnia.jpeg" />
    <div className="book-title">{BOOK_TITLE}</div>
    <div className="auth-title">{AUTH_TITLE}</div>
    <Space>
      <Rate className="rate" tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="rate-number">{desc[value - 1]}</span> : ''}
    </Space>
    <Button className="price">{PRICE_BOOK}</Button>
    </div>
    </div>
</BookCardSmallStyled>
    )
}
export default BookCardSmall;