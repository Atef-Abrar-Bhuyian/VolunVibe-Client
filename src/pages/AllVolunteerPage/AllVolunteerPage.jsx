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
  const handlePrevPage = () => currentPage > 0 && setCurrentPage(currentPage - 1);
  const handleNextPage = () =>
    currentPage < pages.length - 1 && setCurrentPage(currentPage + 1);

  const handleSortByDate = () => {
    axios
      .get("https://assignment12-server-gold.vercel.app/needVolunteerSort")
      .then((res) => setVolunteerPosts(res.data));
  };

  return (
    <div className="my-12 px-4">
      <HelmetProvider>
        <Helmet>
          <title>VolunVibe | Volunteer Posts</title>
        </Helmet>
      </HelmetProvider>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3 space-y-6">
          <div className="text-xl font-semibold text-purple-600">Filters</div>

          <div>
            <label className="relative block">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Search volunteers..."
              />
              <CiSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 text-xl" />
            </label>
          </div>

          <div>
            <button
              onClick={handleSortByDate}
              className="w-full flex justify-center items-center gap-2 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium transition"
            >
              Sort By Date <TiArrowUnsorted className="text-lg" />
            </button>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleGrid}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 font-medium transition ${
                grid
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Grid <IoGrid />
            </button>
            <button
              onClick={handleTable}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 font-medium transition ${
                !grid
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Table <CiViewTable />
            </button>
          </div>
        </aside>

        <main className="lg:col-span-9 space-y-6">
          {grid ? (
            <Grid volunteerPosts={volunteerPosts} />
          ) : (
            <Table volunteerPosts={volunteerPosts} />
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              onClick={handlePrevPage}
              className="text-purple-600 hover:text-purple-800 transition text-2xl"
            >
              <IoIosArrowDropleftCircle />
            </button>
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-1 rounded-full font-semibold transition ${
                  currentPage === page
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className="text-purple-600 hover:text-purple-800 transition text-2xl"
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllVolunteerPage;
