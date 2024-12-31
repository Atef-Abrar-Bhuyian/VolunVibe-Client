import React from "react";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import { Link } from "react-router-dom";

const Grid = ({ volunteerPosts }) => {
  return (
    <div className="grid grid-cols-3 gap-8 w-11/12 mx-auto">
      {volunteerPosts.map((post) => (
        <div
          key={post._id}
          className="card card-compact bg-base-100 h-[32rem] shadow-md border-2 border-purple-400 shadow-purple-700"
        >
          <figure>
            <img className="w-full" src={post.thumbnail} alt={post.postTitle} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.postTitle}</h2>
            <p className="flex items-center gap-1">
              <MdOutlineCategory className="text-lg" />
              <span className="font-semibold">Category</span>: {post.category}
            </p>
            <p className="flex items-center gap-1">
              <IoMdTimer className="text-lg" />
              <span className="font-semibold">Deadline </span>:{" "}
              {post.deadline.split("T")[0]}
            </p>
            <div className="card-actions justify-end">
              <Link to={"/allVolunteerPost"}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
