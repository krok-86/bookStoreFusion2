import { FC, useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./global.styled";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/router/PriveteRouter";
import HomePage from "./components/HomePage/HomePage";
import UserProfile from "./components/UserProfile/UserProfile";
import NewUser from "./components/NewUser/NewUser";
import Cart from "./components/Cart/Cart";
import { useAppDispatch } from "./hook";
import { fetchAuthMe } from "./redux/slices/auth";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

declare module "styled-components" {}

const App: FC = () => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchAuthMe());
    // navigate(JSON.parse(window.sessionStorage.getItem("lastRoute") || "{}"));
    // window.onbeforeunload = () => {
    //   window.sessionStorage.setItem(
    //     "lastRoute",
    //     JSON.stringify(window.location.pathname)
    //   );
    // };
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/postEdit/:id" element={<Cart />} />
          </Route>
          <Route
            path="/registration"
            element={<NewUser isRegistration={true} />}
          />
          <Route path="/authorization" element={<NewUser isRegistration={false} />} />
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
