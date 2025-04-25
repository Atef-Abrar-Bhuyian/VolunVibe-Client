import React, { useEffect, useState } from "react";
import { CiSearch, CiViewTable } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import Table from "../../components/Table/Table";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
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
        `https://assignment12-server-gold.vercel.app/needVolunteer?search=${search}&page=${currentPage}&size=${postsPerPage}`
      )
      .then((res) => setVolunteerPosts(res.data));
  }, [search, currentPage, postsPerPage]);

  const handleGrid = () => setGrid(true);
  const handleTable = () => setGrid(false);
  const handlePrevPage = () =>
    currentPage > 0 && setCurrentPage(currentPage - 1);
  const handleNextPage = () =>
    currentPage < pages.length - 1 && setCurrentPage(currentPage + 1);

  const handleSortByDate = () => {
    axios
      .get("https://assignment12-server-gold.vercel.app/needVolunteerSort")
      .then((res) => setVolunteerPosts(res.data));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
  <HelmetProvider>
    <Helmet>
      <title>VolunVibe | Volunteer Posts</title>
    </Helmet>
  </HelmetProvider>

  {/* Top Controls */}
  <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
    {/* Search Bar */}
    <div className="w-full max-w-md relative">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-5 py-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        placeholder="Search volunteer opportunities..."
      />
      <CiSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 text-2xl" />
    </div>

    {/* Sort + View Mode */}
    <div className="flex flex-wrap items-center gap-4">
      <button
        onClick={handleSortByDate}
        className="flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 font-medium rounded-full shadow-sm transition"
      >
        Sort By Date <TiArrowUnsorted />
      </button>

      <div className="flex items-center gap-2 border border-gray-300 rounded-full p-1 bg-white shadow-sm">
        <button
          onClick={handleGrid}
          className={`px-4 py-2 rounded-full transition font-medium ${
            grid
              ? "bg-purple-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <IoGrid className="inline mr-1" />
          Grid
        </button>
        <button
          onClick={handleTable}
          className={`px-4 py-2 rounded-full transition font-medium ${
            !grid
              ? "bg-purple-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <CiViewTable className="inline mr-1" />
          Table
        </button>
      </div>
    </div>
  </div>

  {/* Volunteer Posts Display */}
  <div>
    {grid ? (
      <Grid volunteerPosts={volunteerPosts} />
    ) : (
      <Table volunteerPosts={volunteerPosts} />
    )}
  </div>

  {/* Pagination */}
  {pages.length > 1 && (
    <div className="flex justify-center items-center gap-2 mt-10">
      <button
        onClick={handlePrevPage}
        className="text-purple-500 hover:text-purple-700 transition text-2xl"
      >
        <IoIosArrowDropleftCircle />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 rounded-full font-semibold text-sm transition ${
            currentPage === page
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-purple-100"
          }`}
        >
          {page + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className="text-purple-500 hover:text-purple-700 transition text-2xl"
      >
        <IoIosArrowDroprightCircle />
      </button>
    </div>
  )}
</div>

  );
};

export default AllVolunteerPage;
