import { FC, useEffect } from "react";
import BookCardSmall from "../BookCardSmall/BookCardSmall";
// import Paginate from "../Pagination/Pagination";
import BookCardsBlockStyled from "./BookCardsBlock.styled";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getBooksList } from "../../redux/slices/book";


const BookCardsBlock: FC = () => {
  const {books} = useAppSelector((state) => state.books);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooksList());
  }, []);
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
      {/* <Paginate /> */}
    </BookCardsBlockStyled>
  );
};

export default BookCardsBlock;
