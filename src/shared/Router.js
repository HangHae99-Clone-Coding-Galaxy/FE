import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Header from "../components/Header";
import AllCourses from "../pages/AllCourses";
import Git from "../components/courses/Git";
import HtmlCss from "../components/courses/HtmlCss";
import JavaScriptEs6 from "../components/courses/JavaScriptEs6";
import JavaScriptJQuery from "../components/courses/JavaScriptJQuery";
import NodeJsMongoDB from "../components/courses/NodeJsMongoDB";
import ReactBasic from "../components/courses/ReactBasic";
import GlobalStyle from "../style/Globalstyle";
import Cart from "../components/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/allcourses" element={<AllCourses />} />
        <Route exact path="/git" element={<Git />} />
        <Route exact path="/htmlcss" element={<HtmlCss />} />
        <Route exact path="/javascriptes6" element={<JavaScriptEs6 />} />
        <Route exact path="/javascriptjquery" element={<JavaScriptJQuery />} />
        <Route exact path="/nodejsmongodb" element={<NodeJsMongoDB />} />
        <Route exact path="/reactbasic" element={<ReactBasic />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
