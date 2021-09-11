import React from 'react';
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection"
import {motion} from 'framer-motion'
import {pageAnimaiton} from './animation'

const AboutUs =()=>{
    return (
        <motion.div variants={pageAnimaiton} initial="hidden" animate="show" exit="exit">
           <AboutSection/>
           <ServicesSection/>
           <FaqSection/>
        </motion.div>
    )
}

export default AboutUs;