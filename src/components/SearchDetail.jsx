import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import JSONDATA from "./info-json";

const SearchDetail = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const main = () => {
    navigate("/");
  };
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

      {JSONDATA.filter((val) => {
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
      })}
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
