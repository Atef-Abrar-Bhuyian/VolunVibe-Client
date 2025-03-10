import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Table = ({volunteerPosts}) => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto rounded-2xl border border-purple-600">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border border-purple-600">
              <th>Title</th>
              <th className="hidden md:block">Category</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
           {
            volunteerPosts.map((post) => 
            <tr key={post._id} className="border border-purple-600">
                <td>{post.postTitle}</td>
                <td className="hidden md:block">{post.category}</td>
                <td>{format(post.deadline,'PPP')}</td>
                <td>
                  <Link to={`/volunteerPost/${post._id}`}><button className="btn">See Details</button></Link>
                </td>
              </tr>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
