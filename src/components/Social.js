import React from 'react';

import { motion } from "framer-motion"

import { fadeIn } from '../varients';

const Social = () => {
  return (
    <motion.div className="home__social"
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.7}}
    >
        <a href="https://www.linkedin.com/in/sahanerandikaweerakkody" className="home__social-icon" target="_blank">
            <i class="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/iamsahan" className="home__social-icon" target="_blank">
            <i class="uil uil-github"></i>
        </a>
        <a href="" className="home__social-icon" target="_blank">
            <i class="uil uil-twitter"></i>
        </a>
    </motion.div>
  )
}

export default Social