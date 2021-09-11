import React,{useState} from "react";
//styles
import styled from 'styled-components';
import {About} from "../styles"
import Toggle from "./Toggle";
import {AnimateSharedLayout } from "framer-motion";
import {useScroll} from "./useScroll"
import {fade}  from '../pages/animation'
const FaqSection=()=>{
const [element,control] = useScroll()

 return(
     <Faq variants={fade} ref={element} 
     initial="hidden"
     animate={control}>
         <h2>Any Questions <span>FAQ</span> </h2>
         <AnimateSharedLayout>
         <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="Diferrent Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        </AnimateSharedLayout>
     </Faq>
 )
}

const Faq = styled(About)`
display: block;
span{
    display: block;
    padding: 1rem;

}
h2{
    padding-bottom: 2rem;
    font-weight:lighter;
}
.faq-line{
    background:#cccccc;
    height:0.2rem;
    margin:2rem 0rem;
    width:100%;
}
.question{
    padding:3rem 0rem;
    cursor: pointer;
}
.answer{
    padding:2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}
`

export default FaqSection;