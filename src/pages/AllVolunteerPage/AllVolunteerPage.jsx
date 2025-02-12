import React, { useEffect, useState } from "react";
import { CiSearch, CiViewTable } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import Table from "../../components/Table/Table";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import "./AllVolunteerPage.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";

const AllVolunteerPage = () => {
  const { count } = useLoaderData();
  const [volunteerPosts, setVolunteerPosts] = useState([]);
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 6;
  const numberOfPages = Math.ceil(count / postsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/needVolunteer?search=${search}&page=${currentPage}&size=${postsPerPage}`
      )
      .then((res) => setVolunteerPosts(res.data));
  }, [search, currentPage, postsPerPage]);

  const handleGrid = () => {
    setGrid(true);
  };

  const handleTable = () => {
    setGrid(false);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSortByDate = () =>{
    axios.get("http://localhost:5000/needVolunteerSort")
    .then((res) => setVolunteerPosts(res.data));
  }

  return (
    <div className="my-10">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>VolunVibe | Volunteer Posts</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>

      <div className="lg:grid grid-cols-12 w-11/12 md:w-11/12 mx-auto">
        <div className="col-span-2">
          <div className="my-10 space-y-6">
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  className="grow"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div>
              <button onClick={handleSortByDate} className="btn w-full flex items-center gap-1">Sort By Date <TiArrowUnsorted />
              </button>
            </div>
            <div className="flex gap-4">
              <button onClick={handleGrid} className="btn hover:bg-purple-500">
                <p className="flex items-center gap-1">Grid <IoGrid className="text-lg" /></p> 
              </button>
              <button
                onClick={handleTable}
                className="btn hover:bg-purple-500 "
              >
                <p className="flex items-center gap-1">Table <CiViewTable className="text-lg" /></p>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-10">
          {grid === true ? (
            <Grid volunteerPosts={volunteerPosts}></Grid>
          ) : (
            <Table volunteerPosts={volunteerPosts}></Table>
          )}

          <div className="pagination">
            <button onClick={handlePrevPage} className="btn">
              <IoIosArrowDropleftCircle />
            </button>
            {pages.map((page) => (
              <button
                key={page}
                className={`btn ${
                  currentPage === page ? "selected text-white" : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page + 1}
              </button>
            ))}
            <button onClick={handleNextPage} className="btn">
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVolunteerPage;
