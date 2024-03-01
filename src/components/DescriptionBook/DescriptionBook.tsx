import { useParams } from "react-router-dom";
import DescriptionBookStyled from "./DescriptionBook.styled";
import { FC, useEffect, useState } from "react";
import { getBookListById, sendUpdatedBook } from "../../redux/slices/book";
import { errorToast, successToast } from "../../utils/toasts/toasts";
import { Button, Rate, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../../hook";
import Post from "../Post/Post";
import BookCardSmall from "../BookCardSmall/BookCardSmall";
import { URLS } from "../../constants";

const DescriptionBook: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { book, books } = useAppSelector((state) => state.books);
  const [rating, setRating] = useState(book?.rating);
  const dispatch = useAppDispatch();
  const priceStr = `$ ${book?.price} USD`;

  useEffect(() => {
    const getOneBookById = async () => {
      if (!id) return;
      try {
        await dispatch(getBookListById(+id));
      } catch (err: any) {
        errorToast(err.response.data.message);
        console.log("getPostById", err);
      }
    };
    getOneBookById();
  }, [id]);

  const sendBook = async (ratingNew: number) => {
    try {
      setRating(ratingNew);
      const id = book?.id || -1;
      await dispatch(sendUpdatedBook({ id: +id, rating: ratingNew })).unwrap();
      successToast("User has been edited");
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  return (
    <DescriptionBookStyled>
      <div className="book-wrap">
        <div className="book-pic-wrapper">
          <img
            className="book-pic"
            src={`${URLS.MAINURL}${book?.picture}`}
            alt=""
          />
        </div>
        <div>
          <div className="book-name">{book?.title}</div>
          <div className="book-author">{book?.author?.name}</div>
          <div className="arrow-left"></div>
          <div className="rate-this-book">
            <Space>
              <div className="star-block">
                <div className="star-wrap">
                  <img className="rate-pic" src="/images/star.png" alt="" />
                  {rating ? (
                    <span className="rate-number">{[rating]}.0</span> //{desc[book?.rating - 1]}
                  ) : (
                    <div className="rate-number">0</div>
                  )}
                </div>
                <Rate
                  className="rate"
                  onChange={(value) => sendBook(value)}
                  value={rating || 0}
                />
              </div>
            </Space>
            <div className="arrow_2">
              <div></div>
            </div>
            <div className="rate-title">Rate this book</div>
          </div>
        </div>
      </div>
      <div className="description">Description</div>
      <div className="description-text">{book?.description}</div>
      <div className="price-block">
        <div className="price-cover">
          <div className="cover">Paperback</div>
          <Button className="price">{priceStr}</Button>
        </div>
        <div className="price-cover">
          <div className="cover">Hardcover</div>
          <Button className="price">{priceStr}</Button>
        </div>
      </div>
      {/* {books?.map((obj) => ( */}
      <Post />
      {/* book={obj}
           key={obj.id}
           />
         ))} */}
      <div className="recommend">Recommendations</div>
      <div className="books-block">
        {books?.map((obj) => (
          <BookCardSmall book={obj} key={obj.id} />
        ))}
      </div>
    </DescriptionBookStyled>
  );
};
export default DescriptionBook;
