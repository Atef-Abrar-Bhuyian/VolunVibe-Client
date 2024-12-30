import React from "react";
import Marquee from "react-fast-marquee";

const InfoMarquee = () => {
  return (
    <div className="play my-10">
      <Marquee gradient={false} speed={100}>
        <p className="mx-4   text-5xl">54216+ HAPPY CHILDREN</p>
        <p className="mx-4   text-5xl">2342+ VOLUNTEERING HELPERS</p>
        <p className="mx-4   text-5xl">32123+ EDUCATED CHILDREN</p>
        <p className="mx-4   text-5xl">15000+ VOLUNTEER HOURS</p>
        <p className="mx-4   text-5xl">300+ EVENTS ORGANIZED</p>
        <p className="mx-4   text-5xl">Serving in 25+ COUNTRIES</p>
        <p className="mx-4   text-5xl">SUPPORTED BY 50+ PARTNERS</p>
      </Marquee>
    </div>
  );
};

export default InfoMarquee;
