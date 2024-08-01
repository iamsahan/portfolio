import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
import Scrolldown from './ScrollDown'
import { motion } from "framer-motion"

import { fadeIn } from '../varients';


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

                <motion.div className="home__img-wrapper"
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                >
                    <div className="home__img"></div>
                </motion.div>
                
                
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