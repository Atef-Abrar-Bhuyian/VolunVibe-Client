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
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Upcoming Volunteer Deadlines
        </h1>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {volunteerPost.map((post) => (
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
                {post.deadline.split('T')[0]}
              </p>
              <div className="card-actions justify-end">
                <Link to={"/allVolunteerPost"}><button className="btn btn-primary">View Details</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;
