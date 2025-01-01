import React from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { BiCategory } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser, FaUsers } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const VolunteerPostDetails = () => {
  const postDetails = useLoaderData();
  return (
    <div className="my-14 w-11/12 mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>VolunVibe | Posts Detials</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Fade delay={500}>
        <div className="flex justify-between flex-col-reverse lg:flex-row">
          {/* Information */}
          <div className="flex-1 mt-10">
            {/* Post Title */}
            <h1 className="text-4xl font-bold">{postDetails.postTitle}</h1>
            <div className="flex gap-6 my-3 items-center juce">
              {/* Category */}
              <h3 className="text-lg p-2 rounded-3xl bg-violet-600 text-white flex items-center gap-1">
                <BiCategory />
                {postDetails.category}
              </h3>

              {/* Location */}
              <h3 className="text-lg p-2 rounded-3xl bg-violet-600 text-white flex items-center gap-1">
                {" "}
                <CiLocationOn />
                {postDetails.location}
              </h3>
            </div>

            {/* description */}
            <div className="space-y-4 mt-10">
              <h3 className="text-lg w-11/12">
                <span className="font-bold">Description: </span>
                {postDetails.description}
              </h3>

              {/* Volunteer Needed */}
              <h3 className="text-lg flex items-center gap-1">
                <span className="font-bold flex items-center gap-1">
                  <FaUsers />
                  Volunteer Needed:
                </span>{" "}
                {postDetails.noOfVolunteersNeeded}
              </h3>

              {/* Deadline */}
              <h3 className="text-lg flex items-center gap-1">
                <span className="font-bold flex items-center gap-1">
                  <IoMdTimer />
                  Deadline:{" "}
                </span>
                {postDetails.deadline.split("T", [1])}
              </h3>

              {/* Organizer Name & Email */}
              <h3 className="text-lg flex items-center gap-1">
                <span className="font-bold flex items-center gap-1">
                  <FaRegUser />
                  Organizer Name:{" "}
                </span>
                {postDetails.organizerName}
              </h3>
              <h3 className="text-lg flex items-center gap-1">
                <span className="font-bold flex items-center gap-1">
                  <MdMarkEmailRead />
                  Organizer Email:{" "}
                </span>
                {postDetails.organizerEmail}
              </h3>
            </div>

            {/* Be a Volunteer btn */}
            <button className="btn mt-10">Be a Volunteer</button>
          </div>
          {/* Thumbnail */}
          <div className="">
            <img className="rounded-xl" src={postDetails.thumbnail} alt="" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default VolunteerPostDetails;
