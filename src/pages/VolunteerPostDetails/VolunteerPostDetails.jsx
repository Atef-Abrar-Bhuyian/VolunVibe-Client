import axios from "axios";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BiCategory } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser, FaUsers } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../../auth/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const VolunteerPostDetails = () => {
  const postDetails = useLoaderData();
  const { user } = useContext(authContext);
  const [alreadyRequested, setAlreadyRequested] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/volunteerRequest").then((res) => {
      const checkingRequest = res.data.find(
        (post) =>
          postDetails._id === post.PostId && post.volunteerEmail === user?.email
      );
      if (checkingRequest) {
        setAlreadyRequested(true);
      }
    });
  }, [postDetails]);

  const handleApplyVolunteer = () => {
    if (user.email === postDetails.organizerEmail) {
      return toast.error("You Cannot Apply To Your Post");
    } else if (postDetails.noOfVolunteersNeeded === 0) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Volunteer slots are fully filled. Thank you for your interest!",
      });
    } else {
      navigate(`/beAVolunteer/${postDetails._id}`);
    }
  };

  return (
    <div className="my-14 w-11/12 mx-auto">
      <ToastContainer />
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>VolunVibe | Post Details</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>
      <Fade delay={500}>
        <div className="flex flex-col lg:flex-row gap-12 bg-white shadow-lg rounded-xl p-6">
          {/* Information Section */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gray-800">{postDetails.postTitle}</h1>
            <div className="flex gap-8 my-6 text-sm text-gray-600">
              {/* Category */}
              <div className="flex items-center gap-3 text-white bg-purple-950 rounded-lg px-4 py-2 shadow-md">
                <BiCategory className="text-xl" />
                <span>{postDetails.category}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-white bg-purple-950 rounded-lg px-4 py-2 shadow-md">
                <CiLocationOn className="text-xl" />
                <span>{postDetails.location}</span>
              </div>
            </div>

            <div className="space-y-6 text-gray-600">
              {/* Description */}
              <h3 className="text-lg">
                <span className="font-semibold text-gray-800">Description: </span>
                {postDetails.description}
              </h3>

              {/* Volunteer Needed */}
              <h3 className="text-lg flex items-center gap-2">
                <FaUsers className="text-xl text-gray-800" />
                <span className="font-semibold text-gray-800">Volunteer Needed:</span> {postDetails.noOfVolunteersNeeded}
              </h3>

              {/* Deadline */}
              <h3 className="text-lg flex items-center gap-2">
                <IoMdTimer className="text-xl text-gray-800" />
                <span className="font-semibold text-gray-800">Deadline:</span> {format(postDetails.deadline, "PPP")}
              </h3>

              {/* Organizer Name & Email */}
              <h3 className="text-lg flex items-center gap-2">
                <FaRegUser className="text-xl text-gray-800" />
                <span className="font-semibold text-gray-800">Organizer Name:</span> {postDetails.organizerName}
              </h3>
              <h3 className="text-lg flex items-center gap-2">
                <MdMarkEmailRead className="text-xl text-gray-800" />
                <span className="font-semibold text-gray-800">Organizer Email:</span> {postDetails.organizerEmail}
              </h3>
            </div>

            {/* Be a Volunteer Button */}
            {alreadyRequested ? (
              <button className="w-full mt-6 py-3 text-lg text-gray-500 bg-gray-300 rounded-md cursor-not-allowed">
                Already Requested
              </button>
            ) : (
              <button
                onClick={handleApplyVolunteer}
                className="w-full mt-6 py-3 text-lg text-white bg-purple-950 rounded-md hover:bg-purple-900 transition duration-300"
              >
                Be a Volunteer
              </button>
            )}
          </div>

          {/* Thumbnail Section */}
          <div className="flex-1">
            <img
              className="rounded-lg w-full h-full object-cover shadow-md hover:scale-105 transition-all duration-300"
              src={postDetails.thumbnail}
              alt={postDetails.postTitle}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default VolunteerPostDetails;
