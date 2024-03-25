import { useEffect, type FC } from 'react';
import CartStyled from './Cart.styled';
import {
  ADD_ITEMS_CART,
  CHECK_OUT,
  CONTINUE,
  EMPTY_CART,
  URLS,
} from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { getBooksFromCart } from '../../redux/slices/cart';
import EmptyCartFavorite from '../../components/layouts/EmptyCartFavorite/EmptyCartFavorite';
import CartList from './CartList/CartList';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Cart: FC = () => {
  // const priceStr = `$ ${books?.price} USD`;
  const { books, status, summ } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooksFromCart(''));
  }, [dispatch]);

  return (
    <CartStyled>
      {status === 'loaded' && (
        <div className="books-block">
          {!books?.length ? (
            <EmptyCartFavorite
              EMPTY_TITLE={EMPTY_CART}
              ADD_ITEMS_TITLE={ADD_ITEMS_CART}
            />
          ) : (
            books?.map((obj) => <CartList book={obj} key={obj.book.id} />)
          )}
        </div>
      )}
      <div className="total-block">
        <div className="total">
          Total:<div className="total-number">{summ} USD</div>
        </div>
        <div className="button-block">
          <Link to={URLS.MAIN_PAGE} className="content-text">
            <Button className="countinue">{CONTINUE}</Button>
          </Link>
          <Button className="check-out">{CHECK_OUT}</Button>
        </div>
      </div>
      {/* <div className="books-block">
      {book?.map((book) => <CartItem book={book} key={book.id}/>)}
      </div> */}
      {/* <div className="total">
        Total:<div className="total-number">{}</div>
      </div>
      <div className="button-block">
      <Button className="countinue">{CONTINUE}</Button>
      <Button className="check-out">{CHECK_OUT}</Button>
      </div> */}
      {/* <EmptyCartFavorite /> */}
    </CartStyled>
  );
};
export default Cart;
