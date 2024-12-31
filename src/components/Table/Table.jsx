import React from "react";

const Table = ({volunteerPosts}) => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
           {
            volunteerPosts.map((post,idx) => 
            <tr key={idx}>
                <th>{idx+1}</th>
                <td>{post.postTitle}</td>
                <td>{post.category}</td>
                <td><button className="btn">See Details</button></td>
              </tr>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
