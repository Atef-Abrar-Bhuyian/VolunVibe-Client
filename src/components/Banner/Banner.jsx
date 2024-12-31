import React from 'react';
import banner1 from "../../assets/banner-images/banner2.jpg"
import { Fade, Slide } from 'react-awesome-reveal';
const Banner = () => {
    const sectionStyle = {
            width: "100%",
            height: "400px",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${banner1})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          };
    return (
        <div className='min-h-screen mb-20 mt-5 text-white text-center' style={sectionStyle}>
            <div className='flex flex-col items-center justify-center min-h-screen space-y-4'>
            <Fade delay={500}>
            <h1 className='text-4xl md:text-6xl font-bold'>Ready to Make an Impact?</h1>
            <h4 className='text-2xl md:text-4xl font-bold'>Welcome to VolunVibe<span className='text-purple-500'>!</span></h4>
            </Fade>
            </div>
        </div>
    );
};

export default Banner;