import React from 'react'
import "./footer.css"
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'


function Footer() {
  return (
    <footer className="footer">
        <motion.div className="footer__container container"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        >
            <h1 className="footer__title">iamsahan</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio\" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact Me</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/sahanerandikaweerakkody" className="home__social-icon" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                </a>
                
                <a href="https://github.com/iamsahan" className="home__social-icon" target="_blank">
                    <i class="bx bxl-github"></i>
                </a>
                
                <a href="as" className="home__social-icon" target="_blank">
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>
            <span className="footer__copy">&#169; 2024 iamsahan.dev | All rigths reserved</span>
        </motion.div>
    </footer>
  )
}

export default Footer