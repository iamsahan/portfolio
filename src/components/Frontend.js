import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../varients';

function Frontend() {
  return (
    <motion.div className="skills__content"
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.7}}
    >
        <h3 className="skills__title">Frontend development</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">HTML5</h3>
                        <div className="skills__level">
                            <div className="skill__meater" style={{width:"100px"}}></div>
                        </div>
                    </div>
                </div>
          

            
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">CSS3</h3>
                        <div className="skills__level">
                            <div className="skill__meater" style={{width:"100px"}}></div>
                        </div>
                    </div>
                </div>
           
            
            
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <div className="skills__level">
                            <div className="skill__meater" style={{width:"100px"}}></div>
                        </div>
                    </div>
                </div>
            

            
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <div className="skills__level">
                            <div className="skill__meater" style={{width:"50px"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Angular</h3>
                        <div className="skills__level">
                            <div className="skill__meater" style={{width:"50px"}}></div>
                        </div>
                    </div>
                </div>
       
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">jQuery</h3>
                        <div className="skills__level">
                            <div className="skill__meater" style={{width:"60px"}}></div>
                        </div>
                    </div>
                </div>
         
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">TypeScript</h3>
                        <div className="skills__level">
                            <div className="skill__meater" style={{width:"40px"}}></div>
                        </div>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Bootsrap</h3>
                        <div className="skills__level">
                            <div className="skill__meater" style={{width:"40px"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Frontend