import { FC } from "react";
import BookCardSmall from "../BookCardSmall/BookCardSmall";
// import Paginate from "../Pagination/Pagination";
import BookCardsBlockStyled from "./BookCardsBlock.styled";

const mockBooks = [
  {
    id: "1",
    title: "The Chronicles of Narnia",
    author: "C. S. Lewis",
    rate: "5",
    price: "50.00",
    image: "/images/narnia.jpeg",
    tag: "",
  },
  {
    id: "2",
    title: "The Chronicles of Narnia",
    author: "C. S. Lewis",
    rate: "5",
    price: "50.00",
    image: "/images/narnia.jpeg",
    tag: "",
  },
  {
    id: "3",
    title: "The Chronicles of Narnia",
    author: "C. S. Lewis",
    rate: "5",
    price: "50.00",
    image: "/images/narnia.jpeg",
    tag: "New",
  },
  {
    id: "4",
    title: "The Chronicles of Narnia",
    author: "C. S. Lewis",
    rate: "5",
    price: "50.00",
    image: "/images/narnia.jpeg",
    tag: "Bestseller",
  },
  {
    id: "5",
    title: "The Chronicles of Narnia",
    author: "C. S. Lewis",
    rate: "5",
    price: "50.00",
    image: "/images/narnia.jpeg",
  },
  {
    id: "6",
    title: "The Chronicles of Narnia",
    author: "C. S. Lewis",
    rate: "5",
    price: "50.00",
    image: "/images/narnia.jpeg",
  },
];

const BookCardsBlock: FC = () => {
  
  return (
    <BookCardsBlockStyled>
      {/* <div className="books-block">
        {mockBooks.map((book) => (
          <BookCardSmall book={book} key={book.id} />
        ))}
      </div> */}
      {/* <Paginate /> */}
    </BookCardsBlockStyled>
  );
};

export default BookCardsBlock;
