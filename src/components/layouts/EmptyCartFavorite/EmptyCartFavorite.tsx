import type { FC } from 'react';
import { GO_CATALOG, GO_TO, URLS } from '../../../constants/constants';
import EmptyCartFavoriteStyled from './EmptyCartFavorite.styled';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

type EmptyCartFavoriteType = {
  EMPTY_TITLE: string;
  ADD_ITEMS_TITLE: string;
};

const EmptyCartFavorite: FC<EmptyCartFavoriteType> = ({
  EMPTY_TITLE,
  ADD_ITEMS_TITLE,
}) => {
  return (
    <EmptyCartFavoriteStyled>
      <div className="content-wrap">
      <div className="title-content">
      <div className="empty">{EMPTY_TITLE}</div>
      <div className="title-block">
        <div className="title">{ADD_ITEMS_TITLE}</div>
        <div className="title">{GO_TO}</div>
      </div>
      <Link to={URLS.MAIN_PAGE} className="content-text">
      <Button className="go-button">{GO_CATALOG}</Button>
      </Link>
      </div>
      <div className="cover-wrap">
        <img className="cover" src="/images/stack book.png" alt="" />
      </div>
      </div>
    </EmptyCartFavoriteStyled>
  );
};
export default EmptyCartFavorite;
