import { format } from "date-fns";
import React from "react";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import { Link } from "react-router-dom";

const Grid = ({ volunteerPosts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
      {volunteerPosts?.map((post) => (
        <div
          key={post._id}
          className="cursor-pointer card card-compact bg-white shadow-purple-950 shadow-md rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <figure className="overflow-hidden rounded-t-lg">
            <img
              className="w-full h-56 object-cover"
              src={post.thumbnail}
              alt={post.postTitle}
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-xl font-semibold text-gray-800 mb-2">
              {post.postTitle}
            </h2>
            <p className="flex items-center gap-2 text-gray-600 mb-2">
              <MdOutlineCategory className="text-2xl text-purple-600" />
              <span className="font-semibold">Category</span>: {post.category}
            </p>
            <p className="flex items-center gap-2 text-gray-600 mb-4">
              <IoMdTimer className="text-2xl text-purple-600" />
              <span className="font-semibold">Deadline</span>: {format(post.deadline, "PPP")}
            </p>
            <div className="card-actions justify-end">
              <Link to={`/volunteerPost/${post._id}`}>
                <button className="btn bg-purple-950 text-white rounded-md px-6 py-2 transition-colors hover:bg-purple-900">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
