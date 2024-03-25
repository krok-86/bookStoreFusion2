import { HeartOutlined } from '@ant-design/icons';
import { type FC } from 'react';
import ButtonHeartStyled from './ButtonHeartStyled';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import type { IRejectValue } from '../../../types/types';
import { bookToFavorite } from '../../../redux/slices/auth';
import { errorToast, successToast } from '../../../utils/toasts/toasts';

type ButtonHeartType = {
  idBook?: number;
};

const ButtonHeart: FC<ButtonHeartType> = ({ idBook }) => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.auth);

  const newArrBooks = books.map((obj) => obj.id);
  // if (!idBook) return;
  const isFavorite = newArrBooks.includes(idBook);
  const addToFavorite = async () => {
    try {
      if (!idBook) return;
      await dispatch(bookToFavorite(idBook?.toString())).unwrap();
      if (!isFavorite) {
        successToast('Book has been added to favorites');
      } else {
        successToast('Book has been remove from favorites');
      }
    } catch (err) {
      errorToast((err as IRejectValue).data);
    }
  };
  return (
    <ButtonHeartStyled isFavorite={isFavorite}>
      <div className="icon-wrap" onClick={addToFavorite}>
        <HeartOutlined className="icon" />
      </div>
    </ButtonHeartStyled>
  );
};
export default ButtonHeart;
