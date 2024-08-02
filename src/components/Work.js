import React from 'react';
import Works from './Works';
import "./work.css";
import { motion } from 'framer-motion';
import { fadeIn } from '../varients';


function Work() {
  return (
    <section className="work section" id="portfolio">
        <motion.h2 className="section__title"
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        >Portfolio</motion.h2>
        <motion.span className="section__subtitle"
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        >Most Recent Works</motion.span>
        
          <Works />
        
       
    </section>
  )
}

export default Work