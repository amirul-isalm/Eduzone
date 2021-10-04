import React from 'react';
import AboutCourse from './AboutCourse';
import Results from './Results';
import WhyChooseUs from './WhyChooseUs';



const About = () => {


    return (
      <div>
        <AboutCourse></AboutCourse>
        <div className='row py-5'>

          {/* two component in a single row */}
          
          <WhyChooseUs></WhyChooseUs>
          <Results></Results>
        </div>
      </div>
    );
};

export default About;