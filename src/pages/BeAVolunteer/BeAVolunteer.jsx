import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../../auth/AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import Swal from "sweetalert2";

const BeAVolunteer = () => {
  const { user } = useContext(authContext);
  const post = useLoaderData();
  const [startDate, setStartDate] = useState(post.deadline);
  const [defaultSelect, setDefaultSelect] = useState(post.category);
  const navigate = useNavigate();

  //   Be A Volunteer
  const handleBeAVolunteer = (e) => {
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
    const volunteerEmail = form.volunteerEmail.value;
    const volunteerName = form.volunteerName.value;
    const status = form.status.value;
    const suggestion = form.suggestion.value;
    const newRequest = {
      PostId:post._id,
      organizerEmail,
      organizerName,
      thumbnail,
      postTitle,
      description,
      deadline,
      noOfVolunteersNeeded,
      location,
      category,
      volunteerEmail,
      volunteerName,
      suggestion,
      status,
    };

    // Add to db
    axios
      .post(`http://localhost:5000/volunteerRequest`, newRequest)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Request Sent!",
            text: "Your request has been successfully sent to the organizer.",
            icon: "success",
          });
          navigate("/manageMyPost");
        }
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="card bg-base-100 md:w-1/2 w-4/5 shadow-purple-600 shadow-md my-10">
          <form onSubmit={handleBeAVolunteer} className="card-body">
            {/* Volunteer Information */}
            <h1 className="text-lg font-bold text-center">
              Volunteer Information
            </h1>
            <div className="md:flex justify-between gap-20">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Volunteer Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.email}
                  name="volunteerEmail"
                  className="input input-bordered"
                  readOnly
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Volunteer Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  name="volunteerName"
                  className="input input-bordered"
                  readOnly
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Suggestion</span>
              </label>
              <input
                type="text"
                placeholder="Do You Have Any Suggestion?"
                name="suggestion"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select
                defaultValue={defaultSelect}
                name="status"
                className="select select-bordered"
              >
                <option disabled>Select</option>
                <option value="Requested">Requested</option>{" "}
              </select>
            </div>

            {/* Post Information */}
            <h1 className="text-lg font-bold text-center">Post Information</h1>
            <div className="md:flex justify-between gap-20">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Organizer Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={post?.organizerEmail}
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
                  defaultValue={post?.organizerName}
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
                  readOnly
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
                  readOnly
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
                readOnly
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
                  readOnly
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
                  readOnly
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
                  disabled
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
                  readOnly
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn ">Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BeAVolunteer;
