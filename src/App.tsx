import { FC, useEffect, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./global.styled";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import UserProfile from "./components/UserProfile/User/UserProfile";
import Cart from "./components/Cart/Cart";
import { useAppDispatch, useAppSelector } from "./hook";
import { fetchAuthMe } from "./redux/slices/auth";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { TailSpin } from "react-loader-spinner";
import ProtectedRoute from "./components/PrivateRoute/PrivateRoute";
import LogIn from "./components/Registration/LogIn/LogIn";
import SingUp from "./components/Registration/SingUp/SingUp";

const App: FC = () => {
  const isAuth = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
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
        <TailSpin color="#fca1a7" radius={"8px"} />
      </div>
    );
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuth={!!isAuth}>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute isAuth={!!isAuth}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/authorization"
            element={<LogIn />}
          />
          <Route
            path="/registration"
            element={<SingUp />}
          />
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
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
