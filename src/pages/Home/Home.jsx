import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import Impact from '../../components/Impact/Impact';
import VolunteerCallToAction from '../../components/VolunteerCallToAction/VolunteerCallToAction';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <Impact></Impact>
            <VolunteerCallToAction></VolunteerCallToAction>
        </div>
    );
};

export default Home;