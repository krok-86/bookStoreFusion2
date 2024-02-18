import { FC, useEffect, useState } from "react";
import BookCardSmall from "../BookCardSmall/BookCardSmall";
// import Paginate from "../Pagination/Pagination";
import BookCardsBlockStyled from "./BookCardsBlock.styled";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getBooksList } from "../../redux/slices/book";
import { Pagination, Space } from "antd";
import { useLocation, useSearchParams } from "react-router-dom";


const BookCardsBlock: FC = () => {
  const {books} = useAppSelector((state) => state.books);
const [curentPage, setCurentPage] = useState(1)
  const dispatch = useAppDispatch();

  let [searchParams] = useSearchParams();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(getBooksList(search));
  }, [searchParams]);

  return (
    <BookCardsBlockStyled>
      <div className="books-block">
        {books?.map((obj) => (
          <BookCardSmall
          book={obj}
          key={obj.id}
          />
        ))}
      </div>
      <Space size={8} direction="vertical">
      <Pagination defaultCurrent={5} total={20} />
      </Space>
    </BookCardsBlockStyled>
  );
};

export default BookCardsBlock;
