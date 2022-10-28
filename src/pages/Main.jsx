import React from "react";
import Review from "../components/Review";
import ReviewList from "../components/ReviewList";

const Main = () => {
  return (
    <div>
      <p>메인화면</p>
      <Review></Review>
      <ReviewList></ReviewList>
    </div>
  );
};

export default Main;
