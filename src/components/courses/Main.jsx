import React from "react";
import Review from "../Review";
import ReviewListItem from "../ReviewListItem";
import ReviewList from "../ReviewList";

const Main = () => {
  return (
    <div>
      <Review></Review>
      <ReviewList></ReviewList>
      {/* <ReviewListItem></ReviewListItem> */}
    </div>
  );
};

export default Main;
