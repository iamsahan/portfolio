import React from 'react'
import Backend from "./Backend"
import Frontend from "./Frontend"
import "./skils.css"
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'



function Skills() {
  return (
    <section className="skills section" id="skills">
        <motion.h2 className="section__title"
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        >Skills</motion.h2>
        <motion.span className="section__subtitle"
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        >My technical level</motion.span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills