import React from 'react';
//importing icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//styles
import styled from 'styled-components'
import {About,Description,Image} from "../styles";
import {fade} from "../pages/animation"
import {useScroll} from './useScroll';

const ServicesSection =()=>{
const [element,control] = useScroll()
    return(
        <Services variants={fade} ref={element} 
        initial="hidden"
        animate={control}>
          <Description>
        <h2>
          High <span>quality</span> services.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
            <Image>
            <img src={home2} alt="home" />
            </Image>
        </Services>
    )
}

const Services = styled(About)`
h2{
    padding-bottom:4rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`
const Cards = styled.div`
display: flex;
flex-wrap: wrap;
h2{
    font-size:1rem;
}
`

const Card = styled.div`
flex-basis: 20rem;
.icon{
    display: flex;
    align-items: center;
}
h3{
    margin-left: 1rem;
    padding: 1rem;
    color:black;
    background:white;
}
`



export default ServicesSection;