import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import imageThree from '../Images/imageThree.jpg';

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
    <motion.div initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{scaleY:0}} transition={{duration:0.2}} className="services">
    <div className='services'>
    <h2>Services</h2>
       <div className='wrapper'>
           {serviceList.map(item => {
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
  </div>
  </motion.div>
  )
}

export default Services
