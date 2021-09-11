import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from "framer-motion";
import {useLocation} from 'react-router-dom'

const Nav = ()=>{
    const {pathname} = useLocation()
    console.log("dfd",pathname)
return(
    <StyledNav>
    <h1><Link id="logo" to="/" >Capture</Link></h1>
    <ul>
        <li>
            <Link to="/">About Us</Link>
            {pathname === '/' ? 
                        <Line transition={{duration:0.75}} initial={{width:"0%"}} 
                        animate={{width:'50%'}} />
            : ""} 
        </li>
        <li>
            <Link to="/work">Our Work</Link>
            {pathname === '/work' ? 
                        <Line transition={{duration:0.75}} initial={{width:"0%"}} 
                        animate={{width:'50%'}} />
            : ""} 

        </li>
        <li>
            <Link to="/contact">Contact Us</Link>
            {pathname === '/contact' ? 
                        <Line transition={{duration:0.75}} initial={{width:"0%"}} 
                        animate={{width:'50%'}} />
            : ""} 
        </li>
    </ul>
    </StyledNav>
)
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  @media (max-width: 1500px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1500px) {
    left: 0%;
  }
`;
export default Nav;