import { FC } from "react";
import BookCardSmallStyled from "./BookCardSmall.styled";
import { Button } from "antd";
import { Space, Rate } from "antd";
import { Link } from "react-router-dom";
import { IBookCardSmall } from "../../../types/types";
import { URLS } from "../../../constants/constants";

const BookCardSmall: FC<IBookCardSmall> = ({ book }) => {
  const priceStr = `$ ${book?.price} USD`;
  // const id = book?.id || -1;
  return (
    <BookCardSmallStyled>
      <Link className="link-small-book-card" to={`${URLS.DESCRIPTION}${book?.id}`}>
      <div className="book-card">
        <div className="book-pic-wrapper">
          <img
            className="book-pic"
            src={`${URLS.MAINURL}${book?.picture}`}
            alt=""
          />
        </div>
        <div className="book-text-wrapper">
          <div className="book-title">{book?.title}</div>
          <div className="auth-title">{book?.author?.name}</div>
          <Space>
            <Rate
              className="rate"
              disabled = {true}
              value={book?.rating || 0}
            />
            {book?.rating ? (
              <span className="rate-number">{[book?.rating]}.0</span>//{desc[book?.rating - 1]}
            ) : (
              <div className="rate-number">0.0</div>
            )}
          </Space>
        </div>
        <Button className="price">{priceStr}</Button>
      </div>
      </Link>
    </BookCardSmallStyled>
  );
};
export default BookCardSmall;
