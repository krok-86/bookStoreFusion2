import type { FC } from 'react';
import BookCardSmallStyled from './BookCardSmall.styled';
import { Button, Space, Rate } from 'antd';
import { Link } from 'react-router-dom';
import type { IBookCardSmall } from '../../../types/types';
import { URLS } from '../../../constants/constants';
import ButtonHeart from '../ButtonHeart/ButtonHeart';
import { useAppDispatch } from '../../../hooks/hook';
import { bookToCart } from '../../../redux/slices/cart';
import { successToast, errorToast } from '../../../utils/toasts/toasts';
// import InscriptionBestseller from '../InscriptionBestseller/InscriptionBestseller';
import InscriptionNewBook from '../InscriptionNewBook/InscriptionNewBook';

const BookCardSmall: FC<IBookCardSmall> = ({ book }) => {
  const priceStr = `$ ${book?.price} USD`;
  const dispatch = useAppDispatch();

  const addBookToCart = async () => {
    if (!book?.id) return;
    try {
      await dispatch(bookToCart(book?.id.toString()));
      successToast('Book added');
    } catch (err: unknown) {
      errorToast('Error on adding book to cart');
    }
  };

  return (
    <BookCardSmallStyled>
      <div className="book-card">
        <div className="book-pic-wrapper">
        <Link className="link-small-book-card" to={`${URLS.DESCRIPTION}${book?.id}`}>
          <img
            className="book-pic"
            src={`${URLS.MAINURL}${book?.picture}`}
            alt=""
          />
        </Link>
        <InscriptionNewBook />
          <ButtonHeart
          idBook = {book?.id}
          />
        </div>
        <div className="book-text-wrapper">
          <div className="book-title">{book?.title}</div>
          <div className="auth-title">{book?.author?.name}</div>
          <Space>
            <Rate
              className="rate"
              disabled
              value={book?.rating || 0}
            />
            {book?.rating ? (
              <span className="rate-number">{[book?.rating]}.0</span>
            ) : (
              <div className="rate-number">0.0</div>
            )}
          </Space>
        </div>
        <Button className="price" onClick = {addBookToCart}>{priceStr}</Button>
      </div>
    </BookCardSmallStyled>
  );
};
export default BookCardSmall;
