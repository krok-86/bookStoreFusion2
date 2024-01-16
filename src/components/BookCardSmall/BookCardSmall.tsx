import { FC } from "react";
import BookCardSmallStyled from "./BookCardSmall.styled";
import { Button } from "antd";
import { useState } from 'react';
import { Space, Rate } from 'antd';
import { IBook } from "../../types";

const desc = ['1.0', '2.0', '3.0', '4.0', '5.0'];

interface IBookCardSmall {
    book: IBook,
}

const BookCardSmall: FC<IBookCardSmall> = ({ book }) => {
    const priceStr =`$ ${book.price} USD`
    const [value, setValue] = useState(+book.rate);
    return (
<BookCardSmallStyled>
    <div className="book-card">
    <div className="book-pic-wrapper">
        <img className="book-pic" src="/images/narnia.jpeg" />
    </div>
    <div className="book-text-wrapper">
    <div className="book-title">{book.title}</div>
    <div className="auth-title">{book.author}</div>
    <Space>
      <Rate className="rate" tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="rate-number">{desc[value - 1]}</span> : ''}
    </Space>
    </div>
    <Button className="price">{priceStr}</Button>
    </div>
</BookCardSmallStyled>
    )
}
export default BookCardSmall;