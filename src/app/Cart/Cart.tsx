import type { FC } from 'react';
import CartStyled from './Cart.styled';
// import CartItem from './CartItem/CartItem/CartItem';
import { Button } from 'antd';
import { CHECK_OUT, CONTINUE } from '../../constants/constants';
import EmptyCart from './EmptyCart/EmptyCart';

const Cart: FC = () => {
  // const mockBooks = [
  //     {
  //       id: 1,
  //       title: "The Chronicles of Narnia",
  //       author: "C. S. Lewis",
  //       rate: '5',
  //       price: '50.00',
  //       image: '/images/narnia.jpeg',
  //       tag: '',
  //     },{
  //       id: 2,
  //       title: "The Chronicles of Narnia",
  //       author: "C. S. Lewis",
  //       rate: '5',
  //       price: '50.00',
  //       image: '/images/narnia.jpeg',
  //       tag: '',
  //     },{
  //       id: 3,
  //       title: "The Chronicles of Narnia",
  //       author: "C. S. Lewis",
  //       rate: '5',
  //       price: '50.00',
  //       image: '/images/narnia.jpeg',
  //       tag: 'New',
  //     },
  // ]
  return (
<CartStyled>
{/* <div className='books-block'>
      {mockBooks?.map((book) => <CartItem book={book} key={book.id}/>)}
      </div> */}
      <div className="total">
        Total:<div className="total-number">{}</div>
      </div>
      <div className="button-block">
      <Button className="countinue">{CONTINUE}</Button>
      <Button className="check-out">{CHECK_OUT}</Button>
      </div>
      <EmptyCart />
</CartStyled>
  );
};
export default Cart;
