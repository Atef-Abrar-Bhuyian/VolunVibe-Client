import { Fade } from "react-awesome-reveal";
import banner1 from "../../assets/banner-images/banner2.jpg"
import { Link } from "react-router-dom";

const VolunteerCallToAction = () => {
    const sectionStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${banner1})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      };
  return (
    <div className="flex flex-col items-center justify-center space-y-4 my-10 text-center text-white" style={sectionStyle}>
      <Fade delay={500}>
        <h1 className="text-4xl font-bold">Are You Ready To Volunteer?</h1>
        <p className="text-xl italic">
          start one of our programm today and help people in need
        </p>
        <hr className="border border-purple-600 w-56" />
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <Link to={"/allVolunteerPost"}><button className="btn">BECOME A VOLUNTEER</button></Link>
          </div>
          <div>
            <button className="btn">MAKE A VOLUNTEER NEED POST</button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default VolunteerCallToAction;
