import type { FC } from 'react';
import FavoriteStyled from './Favorite.styled';
import { useAppSelector } from '../../hooks/hook';
import FavoriteBookList from './FavoriteBooksList/FavoriteBookList';
// import FavoriteEmpty from './FavoriteEmpty/FavoriteEmpty';

const Favorite: FC = () => {
  const { books } = useAppSelector((state) => state.books);

  return (
    <FavoriteStyled>
      <div className="books-block">
      <div className="text">Favorite</div>
      {/* {!books?.length ?
      (<FavoriteEmpty />) : ( */}
        {books?.map((obj) => (
          <FavoriteBookList book={obj} key={obj.id} />
        ))}
        {/* ) */}
      </div>
    </FavoriteStyled>
  );
};
export default Favorite;
