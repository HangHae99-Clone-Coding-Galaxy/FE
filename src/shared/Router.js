import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import AllCourses from "../pages/AllCourses";
import GlobalStyle from "../style/Globalstyle";
import Header from "../components/Header";
import MainPage from "../pages/MainPage";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import Create from "../components/Create";
import SearchDetail from "../components/SearchDetail";
import Members from "../components/Members";
import MembersEdit from "../components/MembersEdit";
import CourseDetail from "../components/CourseDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<SearchDetail />} />
        <Route path="/members" element={<Members />} />
        <Route path="/membersEdit" element={<MembersEdit />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
