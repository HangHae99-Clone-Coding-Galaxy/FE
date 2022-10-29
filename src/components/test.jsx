import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SearchDetail = () => {
  const [search, setSearch] = useState("");
  const [lists, setLists] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    const userData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setLists(res.data.patientList);
          setCurrentPosts();
          // res.data.patientList.slice(indexOfFirstPost, indexOfLastPost)
          setCurrentPage(1);
        });
    };
    userData();
  }, []);

  useEffect(() => {
    setCurrentPosts(lists && lists.slice(indexOfFirstPost, indexOfLastPost));
  }, [indexOfFirstPost, indexOfLastPost, lists]);

  const onSearch = (e) => {
    e.preventDefault();
    if (search === null || search === "") {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setLists(res.data.patientList);
        setCurrentPosts(
          res.data.patientList.slice(indexOfFirstPost, indexOfLastPost)
        );
      });
    } else {
      const filterData =
        lists && lists.filter((row) => row.username.includes(search));
      setLists(filterData);
      setCurrentPosts(
        filterData && filterData.slice(indexOfFirstPost, indexOfLastPost)
      );
      setCurrentPage(1);
    }
    setSearch("");
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <>
      <form onSubmit={(e) => onSearch(e)}>
        <input
          type="text"
          value={search}
          placeholder="아이디를 검색하세요"
          onChange={onChangeSearch}
        />
        <button type="submit">검색</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>아이디</th>
            </tr>
          </thead>

          {currentPosts &&
            currentPosts.map((val, index) => {
              return (
                <tbody key={val.id}>
                  <tr>
                    <td>{(currentPage - 1) * postsPerPage + index + 1}</td>
                    <td>{val.username}</td>
                  </tr>
                </tbody>
              );
            })}
        </table>
        <div className="pagination">
          <div
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            // totalPosts={lists.length}
            paginate={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default SearchDetail;
