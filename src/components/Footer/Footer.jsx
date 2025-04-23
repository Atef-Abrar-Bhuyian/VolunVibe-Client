import React from "react";
import { MdVolunteerActivism } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        {/* Logo */}
        <Link to={"/"} className="btn btn-ghost text-xl">
          <MdVolunteerActivism />
          VolunVibe
        </Link>
        <p>
          Empowering Communities Since 2011
          <br />© 2024 VolunVibe. All rights reserved.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Links</h6>
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/allVolunteerPost" className="link link-hover">
          Volunteer Opportunities
        </Link>
        <Link to="/addVolunteerPost" className="link link-hover">
          Add Volunteer Need Post
        </Link>
        <Link to="/manageMyPost" className="link link-hover">
          Manage My Posts
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to={"/About"} className="link link-hover">About us</Link>
        <Link to={"/About"} className="link link-hover">Contact</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to={"/terms"} className="link link-hover">Terms of use</Link>
        <Link to={"/terms"} className="link link-hover">Privacy policy</Link>
      </nav>
      <ScrollToTop
        smooth
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          bottom: "30px",
          right: "20px",
          width: "50px",
          height: "50px", 
          borderRadius: "50%",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
        }}
      />
    </footer>
  );
};

export default Footer;
