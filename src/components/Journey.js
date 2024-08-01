import React from 'react'
import "./journey.css"
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'


function Journey() {
  return (
    <section className="qualification section">
        <motion.h2 className="section__title"
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        >My Journey</motion.h2>
        <motion.span className="section__subtitle"
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        >My Journey</motion.span>

        <motion.div className="qualification__container container"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        >
            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Fullstack Developer</h3>
                            <span className="qualification__subtitle">Freelance</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2022-present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">BSc (Hons) in Information Technology
                                    Specialising in Software Engineering</h3>
                            <span className="qualification__subtitle">SLIIT</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2022-present
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Higher Diploma in information Technology </h3>
                            <span className="qualification__subtitle">SLIIT</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2022-2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">
                                GCE Advanced Level
                            </h3>
                            <span className="qualification__subtitle">Rajapaksehe Central Collage - Weeraketiya</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2020 Aug
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Journey