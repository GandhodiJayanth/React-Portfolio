import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../Images/project1.jpg';
import imageThree from '../Images/imageThree.jpg';
import imageFive from '../Images/imageFive.jpg';
import { Card } from 'react-bootstrap';
import { Route } from 'react-router-dom';

const Projects = () => {
  const projectList = [
    {
      id:1,
      name:"WebSite Design and Build",
      imageUrl: project1
    },
    {
      id:2,
      name:"WebSite Design and Build",
      imageUrl: imageFive
    },
    {
      id:3,
      name:"WebSite Design and Build",
      imageUrl: imageThree
    },
    {
      id:4,
      name:"WebSite Design and Build",
      imageUrl: imageThree
    },
    {
      id:5,
      name:"WebSite Design and Build",
      imageUrl: project1
    },
    {
      id:6,
      name:"WebSite Design and Build",
      imageUrl: imageFive
    },
  ]
  return (
    <motion.div className='projects' animate={{scale:[2,1], rotate:[90,0]}} transition={{
      duration:0.5,
      ease: 'easeInOut'
    }}>
      <h2>Projects</h2>
         <div className='wrapper'>
             {projectList.map(item => {
                return(
                  <motion.div key={item.id} whileHover={{
                      scale:1.1,
                      transition:{duration:0.5}
                  }} className='cardImg'>
                    <Card>
                       <Card.Img variant='top' src={item.imageUrl} />
                       <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                       </Card.Body>
                    </Card>
                  </motion.div>
                )
             })}
         </div>
    </motion.div>
  )
}

export default Projects
