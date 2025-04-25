import { format } from "date-fns";
import React from "react";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import { Link } from "react-router-dom";

const Grid = ({ volunteerPosts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
      {volunteerPosts?.map((post) => (
        <div
          key={post._id}
          className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col"
        >
          {/* Image Section */}
          <figure className="w-full h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={post.thumbnail}
              alt={post.postTitle}
            />
          </figure>
          
          {/* Content Section */}
          <div className="flex flex-col flex-grow p-6 space-y-4">
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800">{post.postTitle}</h2>
            
            {/* Category */}
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <MdOutlineCategory className="text-lg text-purple-600" />
              <span className="font-semibold">Category</span>: {post.category}
            </p>

            {/* Deadline */}
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <IoMdTimer className="text-lg text-purple-600" />
              <span className="font-semibold">Deadline</span>: {format(post.deadline, "PPP")}
            </p>

            {/* Action Button */}
            <div className="mt-auto flex justify-end">
              <Link to={`/volunteerPost/${post._id}`}>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg transition duration-300 transform hover:bg-purple-700">
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
