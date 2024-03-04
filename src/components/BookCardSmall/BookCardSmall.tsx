import { FC } from "react";
import BookCardSmallStyled from "./BookCardSmall.styled";
import { Button } from "antd";
import { Space, Rate } from "antd";
import { IBookCardSmall } from "../../types";
import { URLS } from "../../constants";
import { Link } from "react-router-dom";



const BookCardSmall: FC<IBookCardSmall> = ({ book }) => {
  const priceStr = `$ ${book?.price} USD`;
  // const isAuth = useAppSelector((state) => state.auth.data);
  const id = book?.id || -1;
  // console.log(">>>>>>>>>",userData)
  // const sendBook = useCallback ( async (ratingNew: number) => {    
  //   try {
  //     console.log(">>>>>>>>>>>>>>")
  //     setRating(ratingNew)
  //     await dispatch(sendUpdatedBook({ id: +id, rating: ratingNew, userId: userData?.id })).unwrap();
  //     successToast("User has been edited");
  //   } catch (err: any) {
  //     errorToast(err.data);
  //   }
  // },[userData?.id]); 
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
              // tooltips={desc}
              disabled = {true}
              // onChange={(value) => sendBook(value)}
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
