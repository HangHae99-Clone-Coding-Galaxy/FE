import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import AllCourses from "../pages/AllCourses";
import GlobalStyle from "../style/Globalstyle";
import Cart from "../components/Cart";
import Header from "../components/Header";
import MainPage from "../pages/MainPage";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import Create from "../components/Create";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/allcourses" element={<AllCourses />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
