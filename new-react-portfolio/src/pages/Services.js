import React from 'react';
import imageThree from '../Images/imageThree.jpg';
import { Card } from 'react-bootstrap';


const Services = () => {
  const serviceList = [
    {
      id:1,
      name:"WebSite Design and Build",
      imageUrl: imageThree
    },
    {
      id:2,
      name:"WebSite Design and Build",
      imageUrl: imageThree
    },
    {
      id:3,
      name:"WebSite Design and Build",
      imageUrl: imageThree
    }
  ]
  return (
    <div className='services'>
    <h2>Services</h2>
       <div className='wrapper'>
           {serviceList.map(item => {
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

export default Services
