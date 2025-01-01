import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import { authContext } from "../../components/AuthProvider/AuthProvider";
import login from "../../assets/Lottie/login.json";
import Lottie from "lottie-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  //   const { setUser, googleSignIn, handleLogin } = useContext(authContext);
  //   const [email, setEmail] = useState("");
  //   const location = useNavigate();
  // Form Login
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const email = e.target.email.value;
  //     const password = e.target.password.value;

  //     handleLogin(email, password)
  //       .then((result) => {
  //         const user = result.user;
  //         location("/");
  //         setUser(user);
  //       })
  //       .catch((error) => {
  //         toast.error("Invalid Credential, Please Try Again");
  //       });
  //   };

  // ForgetPass route
  //   const handleForgetPassword = (e) => {
  //     e.preventDefault();
  //     location("/forget-password", { state: { email } });
  //   };

  // Google Login
  //   const handleGoogleSignIn = () => {
  //     googleSignIn()
  //       .then((result) => {
  //         location("/");
  //       })
  //       .catch((error) => {
  //         toast.error("Please Try Again");
  //       });
  //   };

  return (
    <div className="my-10 w-11/12 mx-auto">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>VolunVibe | Login</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>
      {/* <ToastContainer /> */}
      <Fade>
        <div className="flex flex-col md:flex-row">
          {/* Lottie React */}
          <div className="flex-1 flex items-center justify-center">
            <Lottie className="w-3/4 lg:w-2/4" animationData={login}></Lottie>
          </div>
          {/* Form start */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <div className="flex items-center gap-2">
                <p className="font-semibold">Continue With</p>
                <button
                  // onClick={handleGoogleSignIn}
                  className="btn "
                >
                  <FcGoogle className="text-xl" />
                </button>
              </div>
              <div className="divider">OR</div>
              {/* onSubmit={handleSubmit} */}
              <form className="card-body p-0">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    // onChange={(e) => {
                    //   setEmail(e.target.value);
                    // }}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPass ? "text" : "password"}
                      placeholder="password"
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
                  <label className="label">
                    <Link
                      to="/forget-password"
                      //   onClick={handleForgetPassword}
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn" type="submit">
                    Login
                  </button>
                </div>
                <div>
                  <p>
                    Don't Have An Account?{" "}
                    <Link to="/register" className="text-purple-600 font-bold">
                      Register Now
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Login;
