import { format } from "date-fns";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const VolunteerNeedsNow = () => {
  const volunteerPost = useLoaderData();
  return (
    <div className="my-20 w-11/12 mx-auto">
      <Fade>
        <h1 className="text-3xl md:text-5xl font-bold text-center my-10">
          Upcoming Volunteer Deadlines
        </h1>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {volunteerPost?.map((post) => (
          <div
            key={post._id}
            className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden transition hover:shadow-xl hover:-translate-y-1 duration-300 flex flex-col cursor-pointer"
          >
            {/* Image */}
            <img className="w-full h-44 object-cover" src={post.thumbnail} alt={post.postTitle} />

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-900">{post.postTitle}</h2>

              <div className="flex justify-between items-center mt-2 text-gray-600 text-sm">
                <p className="flex items-center gap-1">
                  <MdOutlineCategory className="text-lg text-purple-600" />
                  {post.category}
                </p>
                <p className="flex items-center gap-1">
                  <IoMdTimer className="text-lg text-red-500" />
                  {format(post.deadline, "PPP")}
                </p>
              </div>

              {/* Push button to the bottom */}
              <div className="flex-grow"></div>
              
              <Link to={`/volunteerPost/${post._id}`}>
                <button className="w-full mt-4 bg-purple-950 text-white py-2 rounded-lg hover:bg-purple-900 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="mt-10 flex justify-end">
        <Link to={"/allVolunteerPost"}>
          <button className="px-6 py-2 bg-purple-950 text-white rounded-lg hover:bg-purple-900 transition">
            See All Volunteer Posts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;
