import React from 'react';
import Common from './Common';
import aboutimg from "../src/images/a1.png";
const About = (props) => {
    return(
<>

<Common name="Welcome To About Page" visit="/contact" btnname="Contact Now" img={aboutimg}/>

</>
);
};

export default About;