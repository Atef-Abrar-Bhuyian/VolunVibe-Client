import React, { useState } from "react";
import { CiViewTable } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import Table from "../../components/Table/Table";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AllVolunteerPage = () => {
  const volunteerPosts = useLoaderData();
  const [grid, setGrid] = useState(true);

  const handleGrid = () => {
    setGrid(true);
  };

  const handleTable = () => {
    setGrid(false);
  };

  return (
    <div className="my-10">
       <HelmetProvider>
              <Helmet>
                <meta charSet="utf-8" />
                <title>VolunVibe | Volunteer Posts</title>
                <link rel="canonical" href="http://mysite.com/example" />
              </Helmet>
            </HelmetProvider>
      <div className="flex justify-between w-11/12 md:w-4/5 mx-auto my-10">
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered border-purple-500 w-full max-w-xs"
          />
        </div>
        <div className="flex gap-4">
          <button onClick={handleGrid} className="btn hover:bg-purple-500">
            <IoGrid className="text-lg " />
          </button>
          <button onClick={handleTable} className="btn hover:bg-purple-500 ">
            <CiViewTable className="text-lg" />
          </button>
        </div>
      </div>
      {grid === true ? (
        <Grid volunteerPosts={volunteerPosts}></Grid>
      ) : (
        <Table volunteerPosts={volunteerPosts}></Table>
      )}
    </div>
  );
};

export default AllVolunteerPage;
