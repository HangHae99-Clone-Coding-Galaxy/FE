import React from "react";
import Footer from "./components/Footer";
import Router from "./shared/Router";
import Main from"../src/pages/Main"


const App = () => {
  return (
    <>
      <Router />
      <Main/>
      <Footer />
    </>
  );
};

export default App;
