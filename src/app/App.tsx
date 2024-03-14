import type { FC } from 'react';
import { useEffect, useState } from 'react';
import '../styles/App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from '../styles/global.styled';
import Cart from './Cart/Cart';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { fetchAuthMe } from '../redux/slices/auth';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { TailSpin } from 'react-loader-spinner';
import ProtectedRoute from './PrivateRoute/PrivateRoute';
import LogIn from './Registration/LogIn/LogIn';
import SingUp from './Registration/SingUp/SingUp';
import DescriptionBook from '../components/elements/DescriptionBook/DescriptionBook';
import AppStyled from '../styles/App.styled';
import HomePage from './HomePage/HomePage';
import UserProfile from './UserProfile/User/UserProfile';
import { Routes, Route } from 'react-router-dom';
import Favorite from './Favorite/Favorite';

const App: FC = () => {
  const isAuth = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          await dispatch(fetchAuthMe());
        } catch (err) {
          console.error(err);
        }
      }
      setInitial(false);
    })();
  }, [dispatch]);

  if (initial) {
    return (
      <div className="spiner">
        <TailSpin color="#fca1a7" radius="8px" />
      </div>
    );
  }
  return (
    <AppStyled>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <div className="content-loading">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/profile"
              element={
                (<ProtectedRoute isAuth={!!isAuth}>
                  <UserProfile />
                 </ProtectedRoute>)
              }
            />
            <Route
              path="/cart"
              element={
                (<ProtectedRoute isAuth={!!isAuth}>
                  <Cart />
                 </ProtectedRoute>)
              }
            />
            <Route
              path="/favorite"
              element={
                (<ProtectedRoute isAuth={!!isAuth}>
                  <Favorite />
                 </ProtectedRoute>)
              }
            />
            <Route path="/authorization" element={<LogIn />} />
            <Route path="/registration" element={<SingUp />} />
            <Route path="/descriptionBook/:id" element={<DescriptionBook />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
        <Footer />
      </ThemeProvider>
    </AppStyled>
  );
};

export default App;
