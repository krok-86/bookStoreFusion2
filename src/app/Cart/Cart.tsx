import { useEffect, type FC } from 'react';
import CartStyled from './Cart.styled';
// import CartItem from './CartItem/CartItem/CartItem';
import { Button } from 'antd';
import { CHECK_OUT, CONTINUE } from '../../constants/constants';
import EmptyCart from './EmptyCart/EmptyCart';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { getBookListById, getRecommededListBook, type ErrorWithMessageType } from '../../redux/slices/book';
import { errorToast } from '../../utils/toasts/toasts';

const Cart: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { book } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const priceStr = `$ ${book?.price} USD`;
  
  useEffect(() => {
    const getOneBookById = async () => {
      if (!id) return;
      try {
        await dispatch(getBookListById(+id));
      } catch (err: unknown) {
        errorToast((err as ErrorWithMessageType).response.data.message);
      }
    };
    getOneBookById();
  }, [dispatch, id]);


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
{/* <div className="books-block">
      {book?.map((book) => <CartItem book={book} key={book.id}/>)}
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
