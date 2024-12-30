import React from "react";
import { MdVolunteerActivism } from "react-icons/md";
import { Link } from "react-router-dom";

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
          <br />
          © 2024 VolunVibe. All rights reserved.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Links</h6>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/allVolunteerPost" className="link link-hover">Volunteer Opportunities</Link>
        <Link to="/addVolunteerPost" className="link link-hover">Add Volunteer Need Post</Link>
        <Link to="/managePost" className="link link-hover">Manage My Posts</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
