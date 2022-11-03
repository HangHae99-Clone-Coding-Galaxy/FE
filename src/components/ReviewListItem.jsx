import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { __delComment, __fixComment } from "../Redux/commentSlice";
//..
import { __editCreate, __delCreate } from "../Redux/modules/addCreateSlice";
import styled from "styled-components";

function ReviewListItem(props) {
  const dispatch = useDispatch();
  const { comment } = props;
  const [edit, setEdit] = useState(false);
  const [reviewEdit, setReviewEdit] = useState(null);

  const [origin, setOrigin] = useState(comment);

  return (
    <Wraper key={comment.id}>
      <div>
        <p>{comment.name}님 :</p>
        {edit ? (
          <div>
            <input
              type="text"
              name="comment"
              required
              defaultValue={comment.comment}
              onChange={(e) => setReviewEdit(e.target.value)}
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                const edit = { ...origin, comment: reviewEdit };
                dispatch(__editCreate(edit));

                setOrigin(edit);
                setEdit(false);
              }}
              type="submit"
            >
              완료
            </button>
          </div>
        ) : (
          <div>
            <p>{origin.title}</p>
            <p>{origin.comment}</p>
            <button
              onClick={() => {
                setEdit(!edit);
              }}
            >
              수정
            </button>
            <button
              type="button"
              onClick={() => {
                console.log("커맨트", comment);
                dispatch(__delCreate(comment));
              }}
            >
              삭제
            </button>
          </div>
        )}
      </div>
    </Wraper>
  );
}

export default ReviewListItem;

const Wraper = styled.form`
  margin: 20px;
  gap: 30px;
  display: flex;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  flex-direction: column-reverse;
  /* margin: 100px auto 0 auto; */
`;
