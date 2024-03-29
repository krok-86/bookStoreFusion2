import { useEffect, type FC } from 'react';
import FavoriteStyled from './Favorite.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import FavoriteBookList from './FavoriteBooksList/FavoriteBookList';
import { getBooksFromFavorite } from '../../redux/slices/auth';
import EmptyCartFavorite from '../../components/layouts/EmptyCartFavorite/EmptyCartFavorite';
import { ADD_ITEMS_FAVORITE, EMPTY_FAVORITE } from '../../constants/constants';
import type { IBook } from '../../types/types';

const Favorite: FC = () => {
  const { books, status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooksFromFavorite(''));
  }, [dispatch]);
  return (
    <FavoriteStyled>
      {status === 'loaded' && (
        <div className="books-block">
          {!books?.length ? <EmptyCartFavorite EMPTY_TITLE={EMPTY_FAVORITE} ADD_ITEMS_TITLE={ADD_ITEMS_FAVORITE} />
            : books?.map((obj: IBook) => (
              <FavoriteBookList book={obj} key={obj.id} />
            ))
          }
        </div>)}
    </FavoriteStyled>
  );
};
export default Favorite;
