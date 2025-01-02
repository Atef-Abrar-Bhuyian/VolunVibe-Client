import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../auth/AuthProvider/AuthProvider";
import { format } from "date-fns";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Fade, Slide } from "react-awesome-reveal";

const ManageMyPost = () => {
  const { user } = useContext(authContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/post/${user?.email}`)
      .then((res) => setPosts(res.data));
  }, [user]);
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
          <Slide>
            <h1 className="text-3xl mb-6 font-bold">My Volunteer Need Posts</h1>
          </Slide>
        </div>
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
                    <td>
                      <button className="btn">
                        <FaRegEdit />
                      </button>
                      <button className="btn">
                        <MdDeleteOutline />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Fade>
      </div>

      {/* My Volunteer Requests  */}
      <div>
        <div>
          <Slide>
            <h1 className="text-3xl my-6 font-bold text-center">My Volunteer Requests</h1>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default ManageMyPost;
