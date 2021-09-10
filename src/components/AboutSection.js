import React from 'react';
import home1 from '../img/home1.png';
//styled components
import styled from 'styled-components'

const AboutSection =()=>{
    return(
        <About>
            <Description>
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>contact us for any photography and videography ideas that you have.we have professsinal with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Imgae>
                <img src={home1} alt="home one" />
            </Imgae>
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
flex:1;
padding-right:5rem;
h2{
    font-weight:lighter;
}
`
const Imgae = styled.div`
flex: 1;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`

export default AboutSection;