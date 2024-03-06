import { FC, useEffect } from "react";
import BookCardsBlockStyled from "./BookCardsBlock.styled";
import { useAppDispatch, useAppSelector } from "../../../hooks/hook";
import { getBooksList } from "../../../redux/slices/book";
import { useLocation, useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import BookCardSmall from "../../layouts/BookCardSmall/BookCardSmall";

const BookCardsBlock: FC = () => {
  const {books, pagination} = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(getBooksList(search));
  }, [searchParams]);

   const handlePageChange = (page: number) => {
    setSearchParams((searchParams) => {searchParams.set("page", page.toString());
      return searchParams;
    });
   };

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
     {!!books?.length && <Pagination
        count={pagination.maxPage}
        page={pagination.currentPage}
        onChange={(event, page) => handlePageChange(page)}
      />}
    </BookCardsBlockStyled>
  );
};

export default BookCardsBlock;
