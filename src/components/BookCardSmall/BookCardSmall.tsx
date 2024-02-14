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

const desc = ["1.0", "2.0", "3.0", "4.0", "5.0"];

interface IBookCardSmall {
  book?: IBook;
}
const BookCardSmall: FC<IBookCardSmall> = ({ book }) => {
  const priceStr = `$ ${book?.price} USD`;
  const [value, setValue] = useState(book?.rating);
  const dispatch = useAppDispatch();
  const [ratingData, setRatingData] = useState<any>();
  const { id } = useParams();
  // const updateRating = (value: number) => {
  //   try {
  //     const newBook = { ...ratingData, rating: value };
  //     setValue(newBook);
  //   } catch (err) {
  //     console.log("updatePost", err);
  //   }
  // };

  const sendBook = async () => {
    try {
      await dispatch(sendUpdatedBook({rating: value})).unwrap();
      successToast("User has been edited");
      console.log(rating)
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  // const sendPost = async () => {
  //    if (!id) return;
  //   try {
  //     await dispatch(
  //       sendUpdatedBook({ id, rating: value rating })
  //     ).unwrap();
  //     successToast("The post has been edited");
  //     // navigate(`${URLS.MAIN_PAGE}`);
  //   } catch (err: any) {
  //     errorToast(err.data);
  //   }
  // };
  console.log(value)
  return (
    <BookCardSmallStyled>
      <div className="book-card">
        <div className="book-pic-wrapper">
          <img className="book-pic" src="/images/narnia.jpeg" alt="" />
        </div>
        <div className="book-text-wrapper">
          <div className="book-title">{book?.title}</div>
          <div className="auth-title">{book?.authorId}</div>
          <Space>
            <Rate
              className="rate"
              tooltips={desc}
              onChange={setValue}
              value={value}
            />
            {value ? (
              <span className="rate-number">{desc[value - 1]}</span>
            ) : (
              ""
            )}
          </Space>
        </div>
        <Button className="price">{priceStr}</Button>
      </div>
    </BookCardSmallStyled>
  );
};
export default BookCardSmall;
