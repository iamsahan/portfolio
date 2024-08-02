import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../varients';

function WorkItems({ item }) {
  const renderDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <p key={index} className="item__description">
        {line}
      </p>
    ));
  };

  return (
    <motion.div
      className="work__card"
      key={item.id}
      variants={fadeIn("top", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
    >
      <img src={item.image} alt='dd' className="work__img" />
      <h3 className="item__title">{item.title}</h3>
      {renderDescription(item.description)}
      <a href="#xss" className="work__button">
        <b>Github</b> <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </motion.div>
  );
}

export default WorkItems;
