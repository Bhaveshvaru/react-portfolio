import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'
//Images
import athelete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//animation 
import {motion} from 'framer-motion'
import {pageAnimaiton ,fade ,photoAnim} from './animation'

const OurWork =()=>{
return(
    <Work variants={pageAnimaiton} initial="hidden" animate="show" exit="exit"
    style={{background:"#fff"}}
    >
        <Movie>
        <h1>The Athelete</h1>
        <div className="line"></div>
        <Link to="/work/the-athlete">
        <img src={athelete} alt="athelete" />
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
    background: #cccccc;
    margin-bottom: 3rem;
}
img{
    width:100%;
    height:70vh;
    object-fit: cover;
}
`


export default OurWork;