import React, { useEffect } from 'react'
import { useState } from 'react'
import { projectsData } from './deta'
import { projectsNav } from './deta'
import WorkItems from './WorkItems'
import "./work.css"




function Works(index) {
   
    const[item, setItem] = useState({name:"all"});
    const[projects, setProjects] = useState([]);
    const[active, setActive] = useState(0);

    useEffect(() => {
        if (item.name==="all"){
            setProjects(projectsData);
        }
        else {
            const newProjects = projectsData.filter((project)=>{
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    },[item])

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent})
    }
  return (
    <div>
        <div className="work__filters">
            {projectsNav.map((item, index) => {
                return <span 
                onClick={(e)=>{handleClick(e, index)}}
                className={`${active === index ? 'active-work' : ''} work__item`} key={index} >{item.name}</span>    
            })}

        </div>    

        <div className="work__container container grid">
            {projects.map((item) => {
                return <WorkItems item={item} key={item.id}/>
            })}
            
        </div>
    </div>
  )
}

export default Works