import { FC } from "react";
import BookCardSmallStyled from "./BookCardSmall.styled";
import { Button } from "antd";
import { Space, Rate } from "antd";
import { IBook } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hook";
import { sendUpdatedBook } from "../../redux/slices/book";
import { errorToast, successToast } from "../../utils/toasts/toasts";

import { URLS } from "../../constants";

const desc = ["1.0", "2.0", "3.0", "4.0", "5.0"];

interface IBookCardSmall {
  book?: IBook;
}
const BookCardSmall: FC<IBookCardSmall> = ({ book }) => {
  const priceStr = `$ ${book?.price} USD`;
  const dispatch = useAppDispatch();
  // const isAuth = useAppSelector((state) => state.auth.data);
  const id = book?.id || -1;
  const sendBook = async (rating: number) => {
    try {
      await dispatch(sendUpdatedBook({ id: +id, rating })).unwrap();
      successToast("User has been edited");
    } catch (err: any) {
      errorToast(err.data);
    }
  };
  return (
    <BookCardSmallStyled>
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
              // tooltips={desc}
              onChange={(value) => sendBook(value)}
              value={book?.rating || 0}
            />
            {book?.rating ? (
              <span className="rate-number">{[book?.rating]}</span>//{desc[book?.rating - 1]}
            ) : (
              <div className="rate-number">"0"</div>
            )}
          </Space>
        </div>
        <Button className="price">{priceStr}</Button>
      </div>
    </BookCardSmallStyled>
  );
};
export default BookCardSmall;
