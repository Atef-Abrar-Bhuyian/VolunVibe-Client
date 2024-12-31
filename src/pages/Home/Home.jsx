import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import Impact from '../../components/Impact/Impact';
import VolunteerCallToAction from '../../components/VolunteerCallToAction/VolunteerCallToAction';
import Faq from '../../components/FAQ/Faq';
import InfoMarquee from '../../components/InfoMarquee/InfoMarquee';
import VolunteerNeedsNow from '../../components/VolunteerNeedsNow/VolunteerNeedsNow';
import Banner from '../../components/Banner/Banner';



const Home = () => {
    return (
        <div>
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