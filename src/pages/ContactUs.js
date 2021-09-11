import React from "react";
import {motion} from 'framer-motion'
import {pageAnimaiton} from './animation'

const ContactUs =()=>{
return(
    <motion.div variants={pageAnimaiton} initial="hidden" animate="show" exit="exit">
        <h1>
           Our Contact 
        </h1>
    </motion.div>
)
}

export default ContactUs;