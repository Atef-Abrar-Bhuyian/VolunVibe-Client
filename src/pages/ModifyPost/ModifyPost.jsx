import React, { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../../auth/AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ModifyPost = () => {
  const axiosSecure = useAxiosSecure();
  const post = useLoaderData();
  const { user } = useContext(authContext);
  const [startDate, setStartDate] = useState(post.deadline);
  const [defaultSelect, setDefaultSelect] = useState(post.category);
  const navigate = useNavigate();

  //   Update Post
  const handleModifyPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const organizerEmail = form.email.value;
    const organizerName = form.name.value;
    const thumbnail = form.image.value;
    const postTitle = form.title.value;
    const description = form.description.value;
    const noOfVolunteersNeeded = parseInt(form.numberOfVolunteer.value);
    const category = form.category.value;
    const location = form.location.value;
    const deadline = startDate;
    const updatedPost = {
      organizerEmail,
      organizerName,
      thumbnail,
      postTitle,
      description,
      deadline,
      noOfVolunteersNeeded,
      location,
      category,
    };

    // Modify a post
    axiosSecure.put(`/updatePost/${post._id}`, updatedPost).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Successfully Modified!",
          text: "Your Post Modified Successfully",
          icon: "success",
        });
        navigate("/manageMyPost");
      }
    });
  };

  return (
    <div className="my-10">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>VolunVibe | Modify Post</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>

      <div>
        <Fade>
          <h1 className="text-3xl font-bold text-center">Modify Your Post</h1>
        </Fade>
      </div>

      <div className="flex items-center justify-center">
        <div className="card bg-base-100 md:w-1/2 w-4/5 shadow-purple-600 shadow-md my-10">
          <form onSubmit={handleModifyPost} className="card-body">
            <div className="md:flex justify-between gap-20">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Organizer Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.email}
                  name="email"
                  className="input input-bordered"
                  readOnly
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Organizer Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  name="name"
                  className="input input-bordered"
                  readOnly
                />
              </div>
            </div>

            <div className="md:flex justify-between gap-20">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Thumbnail</span>
                </label>
                <input
                  type="text"
                  placeholder="Thumbnail URL"
                  name="image"
                  defaultValue={post.thumbnail}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Post Title</span>
                </label>
                <input
                  type="text"
                  defaultValue={post.postTitle}
                  placeholder="Post Title"
                  name="title"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                defaultValue={post.description}
                placeholder="Description"
                name="description"
                className="input input-bordered"
                required
              />
            </div>

            <div className="md:flex justify-between gap-20">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">No. of Volunteers needed</span>
                </label>
                <input
                  type="number"
                  defaultValue={post.noOfVolunteersNeeded}
                  placeholder="Volunteer Needed"
                  name="numberOfVolunteer"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <DatePicker
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>

            <div className="md:flex justify-between gap-20">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  defaultValue={defaultSelect}
                  name="category"
                  className="select select-bordered"
                >
                  <option disabled>Select Category</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Social Service">Social Service</option>
                  <option value="Animal Welfare">Animal Welfare</option>
                </select>
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  defaultValue={post.location}
                  placeholder="Location"
                  name="location"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn ">Update Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModifyPost;
