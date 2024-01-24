import { FC, useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./global.styled";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import UserProfile from "./components/UserProfile/User/UserProfile";
import NewUser from "./components/NewUser/NewUser";
import Cart from "./components/Cart/Cart";
import { useAppDispatch, useAppSelector } from "./hook";
import { fetchAuthMe } from "./redux/slices/auth";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

declare module "styled-components" {}

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  const isAuth = useAppSelector((state) => state.auth.data);

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
          isAuth
           ? <UserProfile />
         : <Navigate to="/authorization" replace />}
      />
            <Route
         path="/cart"
         element={
          isAuth
           ? <Cart />
         : <Navigate to="/authorization" replace />}
      />
          <Route
            path="/authorization"
            element={<NewUser isRegistration={false} />}
          />
          <Route path="/registration" element={<NewUser isRegistration={true} />} />
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