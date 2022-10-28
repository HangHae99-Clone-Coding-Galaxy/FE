import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import AllCourses from "../pages/AllCourses";
import Git from "../components/courses/Git";
import HtmlCss from "../components/courses/HtmlCss";
import JavaScriptEs6 from "../components/courses/JavaScriptEs6";
import JavaScriptJQuery from "../components/courses/JavaScriptJQuery";
import NodeJsMongoDB from "../components/courses/NodeJsMongoDB";
import ReactBasic from "../components/courses/ReactBasic";
import GlobalStyle from "../style/Globalstyle";
import Cart from "../components/Cart";
import Header from "../components/Header";
import MainPage from "../pages/MainPage";
import Create from "../components/Create";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/create" element={<Create />} />
        <Route path="/allcourses" element={<AllCourses />} />
        <Route path="/git" element={<Git />} />
        <Route path="/htmlcss" element={<HtmlCss />} />
        <Route path="/javascriptes6" element={<JavaScriptEs6 />} />
        <Route path="/javascriptjquery" element={<JavaScriptJQuery />} />
        <Route path="/nodejsmongodb" element={<NodeJsMongoDB />} />
        <Route path="/reactbasic" element={<ReactBasic />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
