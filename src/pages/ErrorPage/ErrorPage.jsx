import Lottie from "lottie-react";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import error from "../../assets/Lottie/pageNotFound.json"

const ErrorPage = () => {
  return (
    <div>
      <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VolunVibe | 404 Error</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      </HelmetProvider>
      <div className="min-h-screen bg-white flex flex-col space-y-4 items-center justify-center ">
        <h1 className="text-6xl md:text-7xl font-extrabold text-purple-900 animate-pulse">404</h1>
        <p className="text-lg md:text-2xl mt-4 font-bold">The Page Your Are Looking For Is Not Found!</p>
        <Lottie className="w-1/2 md:w-1/4" animationData={error}></Lottie>
        <Link to={"/"}>
        <button className="btn bg-violet-950 text-white hover:bg-white hover:text-violet-950 hover:border hover:border-violet-950">Return Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
