import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'
//Images
import athelete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//animation 
import {motion} from 'framer-motion'
import {pageAnimaiton ,fade ,photoAnim,lineAnim,slider,sliderContainer} from './animation'

const OurWork =()=>{
return(
    <Work variants={pageAnimaiton} initial="hidden" animate="show" exit="exit"
    style={{background:"#fff"}}
    >
        <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        </motion.div>
        <Movie>
        <motion.h1 variants={fade}>The Athelete</motion.h1>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
            <Hide>
        <motion.img variants={photoAnim} src={athelete} alt="athelete" />
       </Hide>
        </Link>
        </Movie>
        <Movie>
        <h1>The Racer</h1>
        <div className="line"></div>
        <Link to="/work/the-racer">
        <img src={theracer} alt="theracer" />
        </Link>
        </Movie>
        <Movie>
        <h1>Good Times</h1>
        <div className="line"></div>
        <Link to="/work/good-times">
        <img src={goodtimes} alt="goodtimes" />
        </Link>
        </Movie>
    </Work>
)
}

//styled components
const Work = styled(motion.div)`
min-height: 100vh;
overflow: hidden ;
padding: 5rem 10rem;
h1{
    padding: 1rem 0rem;
}
`
const Movie = styled.div`
padding-bottom: 10rem;
.line{
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
}
img{
    width:100%;
    height:70vh;
    object-fit: cover;
}
`

const Hide = styled.div`
overflow: hidden;
`

//frame animation 
const Frame1 = styled(motion.div)`
position: fixed;
left:0;
top:10%;
width:100%;
height:100vh;
background: #fffebf;
z-index: 2;
`

const Frame2 = styled(Frame1)`
background: #ff8efb;
`

const Frame3 = styled(Frame1)`
background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
background: #8effa0;
`

export default OurWork;