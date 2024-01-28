import React from 'react'

function WorkItems({item}) {
  return (
    <div className="work__card" key={item.id}> 
        <img src={item.image} alt='dd' className="work__img"/>
        <h3 className="item__title">{item.title}</h3>
        <p className="item__description">{item.decription}</p>
        <a href="#xss" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorkItems