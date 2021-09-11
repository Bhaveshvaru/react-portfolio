import React from 'react';
import home1 from '../img/home1.png';
//styled components
import styled from 'styled-components'
//framer motion 
import { motion } from 'framer-motion'
import {titleAnim,fade,photoAnim} from '../pages/animation'
import Wave from './Wave'

const AboutSection =()=>{
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2
                        variants={titleAnim}
                        >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 
                        variants={titleAnim}
                        >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2
                        variants={titleAnim}
                        >true.</motion.h2>
                    </Hide>
                </div>
                <motion.p
                variants={fade}
                >contact us for any photography and videography ideas that you have.we have professsinal with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Imgae>
                <motion.img
                variants={photoAnim}
                src={home1} alt="home one" />
            </Imgae>
            <Wave/>
        </About>
    )
}

//styled components
const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-around;
padding: 5rem 10rem;
color:white;
`
const Description = styled.div`
z-index: 2;
flex:1;
padding-right:5rem;
h2{
    font-weight:lighter;
}
`
const Imgae = styled.div`
flex: 1;
z-index: 2;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`
const Hide = styled.div`
overflow: hidden;
`



export default AboutSection;