import { FC } from "react";
import BookCardSmallStyled from "./BookCardSmall.styled";
import { Button } from "antd";
import { useState } from "react";
import { Space, Rate } from "antd";
import { IBook, IEditBook } from "../../types";
import { useAppDispatch } from "../../hook";
import { sendUpdatedBook } from "../../redux/slices/book";
import { errorToast, successToast } from "../../utils/toasts/toasts";
import { useParams } from "react-router-dom";
import { URLS } from "../../constants";

const desc = ["1.0", "2.0", "3.0", "4.0", "5.0"];

interface IBookCardSmall {
  book?: IBook;
}
const BookCardSmall: FC<IBookCardSmall> = ({ book }) => {
  const priceStr = `$ ${book?.price} USD`;
  // const [value, setValue] = useState(book?.rating || 0);
  const dispatch = useAppDispatch();
 
  const id= book?.id || -1;
 
  const sendBook = async (rating:number) => {
    console.log(rating)
    try {
      // if (!value ) return;
      // setValue(rating)
      await dispatch(sendUpdatedBook({id:+id, rating})).unwrap();
      successToast("User has been edited");
      console.log(rating)
    } catch (err: any) {
      errorToast(err.data);
    }
  };
 
  // console.log(value)
  return (
    <BookCardSmallStyled>
      <div className="book-card">
        <div className="book-pic-wrapper">
          <img className="book-pic" src={ `${URLS.MAINURL}${book?.picture}`} alt="" />
        </div>
        <div className="book-text-wrapper">
          <div className="book-title">{book?.title}</div>
          <div className="auth-title">{book?.author?.name}</div>
          <Space>
            <Rate
              className="rate"
              tooltips={desc}
              onChange={(value) => sendBook(value)}
              value={book?.rating || 0}
            />
            {book?.rating ? (
              <span className="rate-number">{desc[book?.rating - 1]}</span>
            ) : (
              "0"
            )}
          </Space>
        </div>
        <Button className="price">{priceStr}</Button>
      </div>
    </BookCardSmallStyled>
  );
};
export default BookCardSmall;
