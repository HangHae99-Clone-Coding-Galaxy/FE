// import React, { useEffect } from "react";
// import ReviewListItem from "./ReviewListItem";
// import { useSelector, useDispatch } from "react-redux";
// import { __getComment } from "../slice";
// import { useParams } from "react-router-dom";

// function ReviewList() {
//   const commentList = useSelector((state) => state.commentSlice.comment);
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   useEffect(() => {
//     dispatch(__getComment(id));
//   }, [dispatch, id]);

//   return (
//     <div>
//       {commentList.map((comment) => (
//         <ReviewListItem key={comment.id} comment={comment} />
//       ))}
//     </div>
//   );
// }

// export default ReviewList;
