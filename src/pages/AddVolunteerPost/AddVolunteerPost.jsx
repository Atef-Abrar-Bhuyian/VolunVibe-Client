import React, { useContext, useState } from "react";
import { authContext } from "../../auth/AuthProvider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddVolunteerPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const handleReviewSubmit = (e) => {
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
    const newPost = {
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

    // make a post request
    axios.post(`http://localhost:5000/addPost`, newPost).then((res) => {
      if (res.data.insertedId) {
        form.reset();
        Swal.fire({
          title: "Successfully Added!",
          text: "Volunteer Need Post Successfully Added",
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
          <title>VolunVibe | Add Posts</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>
      <ToastContainer></ToastContainer>

      {/* Add Review Form */}
      <div className="flex items-center justify-center">
        <div className="card bg-base-100 md:w-1/2 w-4/5 shadow-purple-600 shadow-md my-10">
          <form onSubmit={handleReviewSubmit} className="card-body">
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
                  <span className="label-text">Organizer Email</span>
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
                <select name="category" className="select select-bordered">
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
                  placeholder="Location"
                  name="location"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-indigo-800 to-purple-800 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white">
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteerPost;
