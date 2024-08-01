import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../varients';

function Backend() {
  return (
    <motion.div className="skills__content"
    variants={fadeIn("left", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.7}}
    >
    <h3 className="skills__title"> Backend Development</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">PHP</h3>
                    <div className="skills__level">
                        <div className="skill__meater" style={{width:"100px"}}></div>
                    </div>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Java</h3>
                    <div className="skills__level">
                        <div className="skill__meater" style={{width:"100px"}}></div>
                    </div>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Python</h3>
                    <div className="skills__level">
                        <div className="skill__meater" style={{width:"50px"}}></div>
                    </div>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">node Js</h3>
                    <div className="skills__level">
                        <div className="skill__meater" style={{width:"80px"}}></div>
                    </div>
                </div>
            </div>
        </div>    
        
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">My SQL</h3>
                    <div className="skills__level">
                        <div className="skill__meater" style={{width:"100px"}}></div>
                    </div>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Laravel</h3>
                    <div className="skills__level">
                        <div className="skill__meater" style={{width:"50px"}}></div>
                    </div>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">MongoDB</h3>
                    <div className="skills__level">
                        <div className="skill__meater" style={{width:"90px"}}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</motion.div>
  )
}

export default Backend