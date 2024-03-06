import { useLocation, useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import {
  getBookListById,
  getRecommededListBook,
  sendUpdatedBook,
} from "../../../redux/slices/book";
import { errorToast, successToast } from "../../../utils/toasts/toasts";
import { Rate, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../../../hooks/hook";
import { URLS } from "../../../constants/constants";
import { getPostsList } from "../../../redux/slices/post";
import PostList from "../PostList/PostList";
import DescriptionBlock from "../../layouts/DescriptionBlock/DescriptionBlock";
import BookCardSmall from "../../layouts/BookCardSmall/BookCardSmall";
import DescriptionBookStyled from "./DescriptionBook.styled";
import { HeartOutlined } from "@ant-design/icons";

const DescriptionBook: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { book, recommended } = useAppSelector((state) => state.books);
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const priceStr = `$ ${book?.price} USD`;
  const userData = useAppSelector((state) => state.auth.data);
  const [recommededCounter, setRecommededCounter] = useState(2);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const isMobile = width < 834;
      const isDesktop = width >= 1280;
      const recommendedCount = isMobile ? 2 : isDesktop ? 4 : 3;
      setRecommededCounter(recommendedCount);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const getOneBookById = async () => {
      if (!id) return;
      try {
        await dispatch(getBookListById(+id));
        await dispatch(getRecommededListBook(""));
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
        <div className="book-data-wrapper">
          <div className="book-img-wrapper">
            <img
              className="book-pic"
              src={`${URLS.MAINURL}${book?.picture}`}
              alt=""
            />
            <div className="icon-wrap">
              <HeartOutlined className="icon" />
            </div>
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
            <DescriptionBlock
              className="description-block__desktop"
              text={book?.description || ""}
              price={priceStr}
            />
          </div>
        </div>
        <DescriptionBlock
          className="description-block__mobile"
          text={book?.description || ""}
          price={priceStr}
        />
      </div>
      <div className="post-list">
        <div className="recommend">Comments</div>
        <PostList posts={posts} />
        <div className="recommend">Recommendations</div>
      </div>
      <div className="books-block">
        {recommended?.map((obj, idx) => {
          if (idx >= recommededCounter) return null;
          return <BookCardSmall book={obj} key={obj.id} />;
        })}
      </div>
    </DescriptionBookStyled>
  );
};
export default DescriptionBook;
