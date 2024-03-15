import type { FC } from 'react';
import FavoriteBookListStyled from './FavoriteBookList.styled';
import { URLS } from '../../../constants/constants';
import type { IBook } from '../../../types/types';
import { Button } from 'antd';
import { useAppDispatch } from '../../../hooks/hook';
import { useParams } from 'react-router-dom';
import { bookToCart } from '../../../redux/slices/auth';
import { errorToast, successToast } from '../../../utils/toasts/toasts';

type BookListType = {
  book: IBook;
};
const FavoriteBookList: FC<BookListType> = ({ book }) => {
  const priceStr = `$ ${book?.price} USD`;
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const addBookToCart = async () => {
    if (!id) return;
    try {
      await dispatch(bookToCart(id));
      successToast('Book added');
    } catch (err: unknown) {
      errorToast('Error on adding book to cart');
    }
  };
  return (
    <FavoriteBookListStyled>
      <div className="book-card">
        <div className="book-pic-wrapper">
          <img
            className="book-pic"
            src={`${URLS.MAINURL}${book?.picture}`}
            alt=""
          />
        </div>
        <div className="book-data">
          <div>
          <div className="book-title">{book?.title}</div>
          <div className="auth-title">Darian Bore</div>
          </div>
          <div>
          <div className="remove-title">Remove from favorites</div>
            <Button className="price" onClick={addBookToCart}>{priceStr}</Button>
          </div>
        </div>
      </div>
    </FavoriteBookListStyled>
  );
};
export default FavoriteBookList;
