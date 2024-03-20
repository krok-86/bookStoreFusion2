import { useEffect, type FC } from 'react';
import CartStyled from './Cart.styled';
import { ADD_ITEMS_CART, CHECK_OUT, CONTINUE, EMPTY_CART } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { getBooksFromCart } from '../../redux/slices/auth';
import EmptyCartFavorite from '../../components/layouts/EmptyCartFavorite/EmptyCartFavorite';
import CartList from './CartList/CartList';
import { Button } from 'antd';

const Cart: FC = () => {
  // const priceStr = `$ ${books?.price} USD`;
  const { books, status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooksFromCart(''));
  }, [dispatch]);

  return (
<CartStyled>
{status === 'loaded' && (
        <div className="books-block">
          {!books?.length ? <EmptyCartFavorite EMPTY_TITLE={EMPTY_CART} ADD_ITEMS_TITLE={ADD_ITEMS_CART} />
            : books?.map((obj) => (
              <CartList book={obj} key={obj.id} />
            ))
          }
        </div>)}
        <div className="total">
        Total:<div className="total-number">1231</div>
        </div>
      <div className="button-block">
      <Button className="countinue">{CONTINUE}</Button>
      <Button className="check-out">{CHECK_OUT}</Button>
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
