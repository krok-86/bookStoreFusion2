import { FC, useEffect, useState } from "react";
import BookCardSmall from "../BookCardSmall/BookCardSmall";
import BookCardsBlockStyled from "./BookCardsBlock.styled";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getBooksList } from "../../redux/slices/book";
import { useLocation, useSearchParams } from "react-router-dom";
import { Pagination, TextField } from "@mui/material";



const BookCardsBlock: FC = () => {
  const {books, pagination} = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  console.log(pagination.currentPage)
  console.log(pagination.maxPage)
  console.log(pagination.perPage)
  console.log(pagination.totalItems)
  // const [booksValue, setBooksValue] = useState([]);
  // const [query, setQuery] = useState('react');
   const [currentPage, setCurrentPage] = useState(1);
  // const [pageQty, setPageQty] = useState(0);
  

  let [searchParams] = useSearchParams();
  const { search } = useLocation();
console.log(searchParams)
  useEffect(() => {
    dispatch(getBooksList(search));
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
   useEffect(() => {
    console.log(pagination)
    //@ts-ignore
    dispatch(getBooksList(currentPage));

   },[currentPage])
  



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
      <Pagination
        count={pagination.maxPage}
        page={currentPage}
        onChange={(event, page) => handlePageChange(page)}
      />
    </BookCardsBlockStyled>
  );
};

export default BookCardsBlock;
