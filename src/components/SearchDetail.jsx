import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getCreate } from "../Redux/modules/addCreateSlice";
import JSONDATA from "./info-json";

const SearchDetail = () => {
  const [search, setSearch] = useState("");

  const main = () => {
    navigate("/");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getCreate());
  }, [dispatch]);

  const courses = useSelector((state) => state?.addCreateSlice?.courses);
  console.log(courses);

  return (
    <>
      <Section>
        <Container>
          <PageTitle>
            <Ul>
              <Li onClick={main}>홈</Li>/
            </Ul>
            <H1>검색결과""</H1>
          </PageTitle>
        </Container>
      </Section>
      <Scontent>
        <Input
          type="text"
          placeholder="Type Keywords.."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Scontent>

      {/* {JSONDATA.filter((val) => {
        if (search === "") {
          return val;
        } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div key={val.id}>
            <p>{val.name}</p>
          </div>
        );
      })} */}
      <CoursesWrap>
        {courses
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((course) => {
            return (
              <Card
                key={course.course_id}
                onClick={() => {
                  navigate(`/course/${course.course_id}`);
                }}
              >
                {/* <IMG src="https://codingapple.com/wp-content/uploads/2020/02/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84-6-1-1.png" /> */}
                <IMG src={course.thumbNail} alt="test" />
                <TextWrap>
                  <h5>{course.title}</h5>
                  <p>{course.content}</p>
                </TextWrap>
              </Card>
            );
          })}
      </CoursesWrap>
    </>
  );
};

export default SearchDetail;

const Section = styled.div`
  background: #fafafa;
  padding-bottom: 30px;
`;
const PageTitle = styled.div`
  padding-top: 30px;
`;
const Container = styled.div`
  width: 1200px;
  margin: auto;
`;
const Ul = styled.ul`
  & li:nth-child(1) {
    cursor: pointer;
  }
  font-size: 11px;
  display: flex;
`;
const Li = styled.li`
  margin: 0 10px;
`;
const H1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
`;
const H4 = styled.h1`
  font-size: 15px;
  margin: 20px 10px 10px 10px;
`;
const Scontent = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;
const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 10px 24px;
  border-radius: 5px;
  margin-right: 20px;
  width: 360px;
  height: 40px;
`;

const CoursesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1320px;
  margin: 0 auto;
  border: none;
  /* display: grid;
border: none;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: minmax(417px);
padding: 10px; */
`;

const IMG = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #ccc;
  color: #a0a0a0;
  border-radius: 4px;
  width: 400px;
  height: 250px;
  /* margin: 0.6rem 0.6rem;
    padding: 0.1rem; */
  outline: none;
  cursor: pointer;
`;

const Card = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  width: 440px;
  height: 417px;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.7s;

  :hover {
    transform: scale(0.9);
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 0.7rem;
  font-size: 0.9rem;
  font-weight: bold;

  h5 {
    transition: all 0.7s;
    color: #105796;
    font-size: 18px;
    cursor: pointer;
    :hover {
      color: red;
    }
  }
  p {
    font-size: 16px;
    text-align: center;
    /* white-space: nowrap; */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 360px;
    height: 32px;
  }
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
