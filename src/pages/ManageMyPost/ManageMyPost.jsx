import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { authContext } from "../../auth/AuthProvider/AuthProvider";
import { format } from "date-fns";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Fade, Slide } from "react-awesome-reveal";
import notFound from "../../assets/Lottie/notFound.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageMyPost = () => {
  const { user } = useContext(authContext);
  const [posts, setPosts] = useState([]);
  const [requestPosts, setRequestPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/post/${user?.email}`)
      .then((res) => setPosts(res.data));
  }, [user]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/requesPost/${user?.email}`)
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
        axios.delete(`http://localhost:5000/post/${id}`).then((res) => {
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
        axios.delete(`http://localhost:5000/requestPost/${id}`).then((res) => {
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
        <div>
          {/* Heading */}
          <Slide>
            <h1 className="text-3xl text-center mb-6 font-bold">
              My Volunteer Need Posts
            </h1>
          </Slide>
        </div>
        {/* Table */}
        {posts.length > 0 ? (
          <Fade delay={500}>
            {/* Table */}
            <div className="overflow-x-auto rounded-2xl border border-purple-600">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="border border-purple-600">
                    <th>Post Title</th>
                    <th className="hidden md:block">Category</th>
                    <th>Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {posts.map((post) => (
                    <tr key={post._id} className="border border-purple-600">
                      <td>{post.postTitle}</td>
                      <td className="hidden md:block">{post.category}</td>
                      <td>{format(post.deadline, "PPP")}</td>
                      <td className="flex justify-center gap-2">
                        <Link to={`/modifyPost/${post._id}`}>
                          <button className="btn">
                            <FaRegEdit />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="btn"
                        >
                          <MdDeleteOutline />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Fade>
        ) : (
          <div className="flex items-center justify-center">
            <Lottie className="w-[60px]" animationData={notFound}></Lottie>
            <h4 className="text-2xl font-bold">No Data Found</h4>
          </div>
        )}
      </div>

      {/* My Volunteer Requests  */}

      <div>
        <div>
          {/* Heading */}
          <Slide>
            <h1 className="text-3xl text-center mb-6 font-bold mt-10">
              My Volunteer Requests
            </h1>
          </Slide>
        </div>
        {/* Table */}
        {requestPosts.length > 0 ? (
          <Fade delay={500}>
            {/* Table */}
            <div className="overflow-x-auto rounded-2xl border border-purple-600">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="border border-purple-600">
                    <th>Post Title</th>
                    <th className="hidden md:block">Status</th>
                    <th>Category</th>
                    <th>Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {requestPosts.map((post) => (
                    <tr key={post._id} className="border border-purple-600">
                      <td>{post.postTitle}</td>
                      <td>{post.status}</td>
                      <td className="hidden md:block">{post.category}</td>
                      <td>{format(post.deadline, "PPP")}</td>
                      <td className="flex justify-center gap-2">
                        <button
                          onClick={() => handleRequesDelete(post._id)}
                          className="btn"
                        >
                          <MdDeleteOutline />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
