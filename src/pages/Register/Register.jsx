import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Helmet, HelmetProvider } from "react-helmet-async";

import register from "../../assets/Lottie/register.json";
import Lottie from "lottie-react";
import { Fade } from "react-awesome-reveal";
import { authContext } from "../../auth/AuthProvider/AuthProvider";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const location = useNavigate();
  const { handleRegister, updateUserProfile, googleSignIn } =
    useContext(authContext);
  const [error, setError] = useState("");

  //   Register with Email
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setError("Password Must Contain At Least 6 Characters");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password Must Contain At Least One Lowercase Letter");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password Must Contain At Least One Uppercase Letter");
      return;
    }

    handleRegister(email, password)
      .then((result) => {
        updateUserProfile({ displayName: name, photoURL: photo });
        const user = result.user;
        location("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //   Login With Google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        location("/");
      })
      .catch((error) => {
        toast.error("Please Try Again");
      });
  };

  return (
    <div className="w-4/5 mx-auto m-10">
      <ToastContainer />
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>VolunVibe | Register</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>

      <Fade>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex items-center justify-center">
            <Lottie
              className="w-3/4 lg:w-2/4"
              animationData={register}
            ></Lottie>
          </div>

          {/* Form */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4">
              {/* Google btn */}
              <p className="font-semibold">Continue With</p>
              <button
                  onClick={handleGoogleSignIn}
                className="btn"
              >
                <FcGoogle className="text-xl" />
              </button>
            </div>
            <div className="divider">OR</div>
           
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPass ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-full"
                    required
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPass(!showPass);
                    }}
                    className="btn btn-xs absolute top-3 right-3 text-lg"
                  >
                    {showPass ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              {/* Register btn */}
              <div className="form-control mt-6">
                <button className="btn" type="submit">
                  Register
                </button>
              </div>
              <p className="mt-3">
                Already Have An Account?{" "}
                <Link to="/login" className="text-violet-500 font-bold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Register;
