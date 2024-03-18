import { Button } from 'antd';
import { type FC } from 'react';
import { useAppDispatch } from '../../../hooks/hook';
import { errorToast, successToast } from '../../../utils/toasts/toasts';
import { bookToCart } from '../../../redux/slices/auth';
import { useParams } from 'react-router-dom';

interface IDescriptionBlock {
    text: string;
    price: string;
    className?: string;
}

const DescriptionBlock:FC<IDescriptionBlock> = ({ className, text, price }) => {
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
      <div className={className}>
        <div className="book-description">
        <div className="description">Description</div>
        <div className="description-text">{text}</div>
        <div className="price-block">
          <div className="price-cover">
            <div className="cover">Paperback</div>
            <Button className="price" onClick={addBookToCart}>{price}</Button>
          </div>
        <div className="price-cover">
          <div className="cover">Hardcover</div>
          <Button className="price">{price}</Button>
        </div>
        </div>
        </div>
      </div>
  );
};

export default DescriptionBlock;
