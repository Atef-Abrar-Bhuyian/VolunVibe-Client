import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { authContext } from "../../auth/AuthProvider/AuthProvider";
import { format } from "date-fns";
import { FaRegEdit } from "react-icons/fa";
import { MdCancel, MdDeleteOutline } from "react-icons/md";
import { Fade, Slide } from "react-awesome-reveal";
import notFound from "../../assets/Lottie/notFound.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageMyPost = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(authContext);
  const [posts, setPosts] = useState([]);
  const [requestPosts, setRequestPosts] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/post/${user?.email}`).then((res) => setPosts(res.data));
  }, [user]);

  useEffect(() => {
    axiosSecure
      .get(`/requesPost/${user?.email}`)
      .then((res) => setRequestPosts(res.data));
  }, [user]);

  // delete functionality
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        axiosSecure.delete(`/post/${id}`).then((res) => {
          const updatedResult = posts.filter((post) => post._id !== id);
          setPosts(updatedResult);
        });
      }
    });
  };

  // Delete Request
  const handleRequesDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Request has been deleted.",
          icon: "success",
        });
        axiosSecure.delete(`/requestPost/${id}`).then((res) => {
          const updatedResult = requestPosts.filter((post) => post._id !== id);
          setRequestPosts(updatedResult);
        });
      }
    });
  };

  return (
    <div className="my-10 w-11/12 mx-auto ">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>VolunVibe | Manage Post</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>

      {/* my volunteer need posts */}
      <div>
        <Slide>
          <h1 className="text-3xl text-center mb-6 font-bold">
            My Volunteer Need Posts
          </h1>
        </Slide>

        {posts.length > 0 ? (
          <Fade delay={500} triggerOnce={true}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="card shadow-lg border border-purple-600 rounded-lg hover:shadow-xl transition duration-300"
                >
                  <img
                    src={post.thumbnail}
                    alt={post.postTitle}
                    className="rounded-t-lg w-full h-48 object-cover"
                  />
                  <div className="card-body p-4">
                    <h2 className="text-lg font-semibold">{post.postTitle}</h2>
                    <p className="text-sm text-gray-600">{post.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-xs text-gray-400">
                        {format(post.deadline, "PPP")}
                      </p>
                      <div className="flex gap-2">
                        <Link to={`/modifyPost/${post._id}`}>
                          <button className="btn text-indigo-600 hover:text-indigo-800">
                            <FaRegEdit />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="btn text-red-600 hover:text-red-800"
                        >
                          <MdDeleteOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        ) : (
          <div className="flex items-center justify-center">
            <Lottie className="w-[60px]" animationData={notFound}></Lottie>
            <h4 className="text-2xl font-bold">No Data Found</h4>
          </div>
        )}
      </div>

      {/* My Volunteer Requests */}
      <div>
        <Slide>
          <h1 className="text-3xl text-center mb-6 font-bold mt-10">
            My Volunteer Requests
          </h1>
        </Slide>

        {requestPosts.length > 0 ? (
          <Fade delay={500} triggerOnce={true}>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requestPosts.map((post) => (
                <div
                  key={post._id}
                  className="card shadow-lg border border-purple-600 rounded-lg hover:shadow-xl transition duration-300"
                >
                  <img
                    src={post.thumbnail}
                    alt={post.postTitle}
                    className="rounded-t-lg w-full h-48 object-cover"
                  />
                  <div className="card-body p-4">
                    <h2 className="text-lg font-semibold">{post.postTitle}</h2>
                    <p className="text-xs text-gray-500">
                      Status: {post.status}
                    </p>
                    <p className="text-sm text-gray-600">{post.category}</p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-xs text-gray-400">
                        {format(post.deadline, "PPP")}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleRequesDelete(post._id)}
                          className="btn text-red-600 hover:text-red-800"
                        >
                          <MdCancel />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        ) : (
          <div className="flex items-center justify-center">
            <Lottie className="w-[60px]" animationData={notFound}></Lottie>
            <h4 className="text-2xl font-bold">No Data Found</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMyPost;
