import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Impact from "../../components/Impact/Impact";
import VolunteerCallToAction from "../../components/VolunteerCallToAction/VolunteerCallToAction";
import Faq from "../../components/FAQ/Faq";
import InfoMarquee from "../../components/InfoMarquee/InfoMarquee";
import VolunteerNeedsNow from "../../components/VolunteerNeedsNow/VolunteerNeedsNow";
import Banner from "../../components/Banner/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VolunVibe | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <HeroSlider></HeroSlider>
      <VolunteerNeedsNow></VolunteerNeedsNow>
      <Impact></Impact>
      <VolunteerCallToAction></VolunteerCallToAction>
      <Faq></Faq>
      <InfoMarquee></InfoMarquee>
    </div>
  );
};

export default Home;
