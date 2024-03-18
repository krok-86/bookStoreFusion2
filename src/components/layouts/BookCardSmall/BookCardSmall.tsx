import type { FC } from 'react';
import BookCardSmallStyled from './BookCardSmall.styled';
import { Button, Space, Rate } from 'antd';
import { Link } from 'react-router-dom';
import type { IBookCardSmall } from '../../../types/types';
import { URLS } from '../../../constants/constants';
import ButtonHeart from '../ButtonHeart/ButtonHeart';

const BookCardSmall: FC<IBookCardSmall> = ({ book }) => {
  const priceStr = `$ ${book?.price} USD`;
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
              <span className="rate-number">{[book?.rating]}.0</span>// {desc[book?.rating - 1]}
            ) : (
              <div className="rate-number">0.0</div>
            )}
          </Space>
        </div>
        <Button className="price">{priceStr}</Button>
      </div>
    </BookCardSmallStyled>
  );
};
export default BookCardSmall;
