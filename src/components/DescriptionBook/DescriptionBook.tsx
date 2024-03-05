import { useParams } from "react-router-dom";
import DescriptionBookStyled from "./DescriptionBook.styled";
import { FC, useEffect } from "react";
import { getBookListById, getRecommededListBook, sendUpdatedBook } from "../../redux/slices/book";
import { errorToast, successToast } from "../../utils/toasts/toasts";
import { Button, Rate, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../../hook";
import BookCardSmall from "../BookCardSmall/BookCardSmall";
import { URLS } from "../../constants";
import { getPostsList } from "../../redux/slices/post";
import PostList from "../Post/PostList/PostList";

const DescriptionBook: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { book, recommended } = useAppSelector((state) => state.books);
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const priceStr = `$ ${book?.price} USD`;
  const userData = useAppSelector((state) => state.auth.data);

  useEffect(() => {
    const getOneBookById = async () => {
      if (!id) return;
      try {
        await dispatch(getBookListById(+id));
        await dispatch(getRecommededListBook(''));
      } catch (err: any) {
        errorToast(err.response.data.message);
        console.log("getPostById", err);
      }
    };
    getOneBookById();
  }, [id]);

  useEffect(() => {
    if (!book?.id) return;
    dispatch(getPostsList(book?.id?.toString()));
  }, [book?.id]);

  const sendBook = async (ratingNew: number) => {
    try {
      if (!id) return;
      await dispatch(
        sendUpdatedBook({ id: +id, rating: ratingNew, userId: userData?.id })
      ).unwrap();
      successToast("User has been edited");
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  return (
    <DescriptionBookStyled>
      <div className="book-wrap">
        <div className="book-img-wrapper">
          <img
            className="book-pic"
            src={`${URLS.MAINURL}${book?.picture}`}
            alt=""
          />
        </div>
        <div className="book-data">
          <div className="book-name">{book?.title}</div>
          <div className="book-author">{book?.author?.name}</div>
          <div className="arrow-left"></div>
          <div className="rate-this-book">
            <Space>
              <div className="star-block">
                <div className="star-wrap">
                  <img className="rate-pic" src="/images/star.png" alt="" />
                  {book?.rating ? (
                    <span className="rate-number">{[book?.rating]}.0</span> //{desc[book?.rating - 1]}
                  ) : (
                    <div className="rate-number">0</div>
                  )}
                </div>
                <Rate
                  className="rate"
                  onChange={(value) => sendBook(value)}
                  value={book?.rating || 0}
                />
              </div>
            </Space>
            <div className="arrow_2">
              <div></div>
            </div>
            <div className="rate-title">Rate this book</div>
          </div>
          <div className="book-description">
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
          </div>
        </div>
      </div>
      <div className="post-list">
      <div className="recommend">Comments</div>
      <PostList posts={posts} />
      <div className="recommend">Recommendations</div>
      </div>
      <div className="books-block">
        {recommended?.map((obj, idx) => {
          return(
          <BookCardSmall book={obj} key={obj.id} />
          )
        }
        )}
      </div>
    </DescriptionBookStyled>
  );
};
export default DescriptionBook;
