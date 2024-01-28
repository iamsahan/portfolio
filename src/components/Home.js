import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
import Scrolldown from './ScrollDown'
import { motion } from "framer-motion"


const sliderVarient = {
  initial: {
    x:0,
  },
  animate: {
    x:"-50%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:80,
    },
  },
}

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <div className="home__img-wrapper">
                    <div className="home__img"></div>
                </div>
                
                
                <motion.div className="slidingTextAnimation" variants={sliderVarient} initial="initial" animate="animate">
                iamsahan#Crafting Digital Experiences
                </motion.div>

                    <Data />

            </div>
            <Scrolldown />
        </div>
    </section>
  )
}

export default Home