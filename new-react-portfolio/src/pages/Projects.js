import React from 'react';
import project1 from '../Images/project1.jpg';
import imageThree from '../Images/imageThree.jpg';
import imageFive from '../Images/imageFive.jpg';
import { Card } from 'react-bootstrap';

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
    <div className='projects'>
      <h2>Projects</h2>
         <div className='wrapper'>
             {projectList.map(item => {
                return(
                  <div className='cardImg'>
                    <Card>
                       <Card.Img variant='top' src={item.imageUrl} />
                       <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                       </Card.Body>
                    </Card>
                  </div>
                )
             })}
         </div>
    </div>
  )
}

export default Projects
