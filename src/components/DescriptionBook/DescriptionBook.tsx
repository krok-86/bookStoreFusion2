import { useParams } from "react-router-dom";
import DescriptionBookStyled from "./DescriptionBook.styled";
import { FC, useEffect, useState } from "react";
import { getBookListById, sendUpdatedBook } from "../../redux/slices/book";
import { IBook } from "../../types";
import { errorToast, successToast } from "../../utils/toasts/toasts";
// import { URLS } from "../../constants";
import { Button, Rate, Space } from "antd";
import { useAppDispatch } from "../../hook";
import Post from "../Post/Post";

// export interface IEditPost {
//   id: string;
//   postText: string;
// }

const DescriptionBook: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [bookData, setBookData] = useState<IBook | undefined>();
  const [rating, setRating] = useState(bookData?.rating);
  const dispatch = useAppDispatch();
  const priceStr = `$ ${bookData?.price} USD`;
  useEffect(() => {
    const getOneBookById = async () => {
      if (!id) return;
      try {
        const idAsNumber = parseInt(id);
        const result = await getBookListById(idAsNumber);
        //@ts-ignore
        setBookData(result.data);
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
      const id = bookData?.id || -1;
      await dispatch(sendUpdatedBook({ id: +id, rating: ratingNew })).unwrap();
      successToast("User has been edited");
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  console.log(bookData?.price);
  return (
    <DescriptionBookStyled>
      <div className="book-wrap">
        <div className="book-pic-wrapper">
          <img
            className="book-pic"
            // src={`${URLS.MAINURL}${bookData?.picture}`}
            src="/images/narnia.jpeg"
            alt=""
          />
        </div>
        <div>
          <div className="book-name">{bookData?.title}</div>
          <div className="book-author">{bookData?.author?.name}</div>

          <Space>
            <div className="star-block">
              <div className="star-wrap">
                <img src="/images/star.png" alt="" />
                {rating ? (
                  <span className="rate-number">{[rating]}.0</span> //{desc[book?.rating - 1]}
                ) : (
                  <div className="rate-number">0</div>
                )}
              </div>
              <Rate
                className="rate"
                // tooltips={desc}
                onChange={(value) => sendBook(value)}
                value={rating || 0}
              />
            </div>
          </Space>
          <div className="rate-title">Rate this book</div>
        </div>
      </div>
      <div className="description">Description</div>
      <div className="description-text">{bookData?.description}#1 New York Times bestseller milk and honey is a collection of poetry and prose about survival. About the experience of violence, abuse, love, loss, and femininity.</div>
      <Button className="price">{priceStr}</Button>
      <Post />
    </DescriptionBookStyled>
  );
};
export default DescriptionBook;
