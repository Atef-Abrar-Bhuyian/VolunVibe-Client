import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VolunVibe | Error</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="min-h-screen flex flex-col space-y-4 items-center justify-center">
        <h1 className="text-4xl font-bold">404!</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <Link to={"/"}>
        <button className="btn">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
