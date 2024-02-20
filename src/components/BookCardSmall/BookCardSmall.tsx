import { FC, useState } from "react";
import BookCardSmallStyled from "./BookCardSmall.styled";
import { Button } from "antd";
import { Space, Rate } from "antd";
import { IBook } from "../../types";
import { useAppDispatch } from "../../hook";
import { sendUpdatedBook } from "../../redux/slices/book";
import { errorToast, successToast } from "../../utils/toasts/toasts";

import { URLS } from "../../constants";

interface IBookCardSmall {
  book?: IBook;
}
const BookCardSmall: FC<IBookCardSmall> = ({ book }) => {
  const priceStr = `$ ${book?.price} USD`;
  const dispatch = useAppDispatch();
 const [rating, setRating] = useState(book?.rating)
  // const isAuth = useAppSelector((state) => state.auth.data);
  const id = book?.id || -1;
  const sendBook = async (ratingNew: number) => {
    try {
      setRating(ratingNew)
      await dispatch(sendUpdatedBook({ id: +id, rating: ratingNew })).unwrap();
      successToast("User has been edited");
    } catch (err: any) {
      errorToast(err.data);
    }
  };
  console.log(book?.author?.name)
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
              value={rating || 0}
            />
            {rating ? (
              <span className="rate-number">{[rating]}.0</span>//{desc[book?.rating - 1]}
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
