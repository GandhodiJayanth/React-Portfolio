import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Form, FormControl, FormGroup, FormLabel, Row, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

const Contact = () => {
  const [addMessage, setAddMessage] = useState('');

    const handleSubmit = (e) => {
        //  e.preventDefault();
         setAddMessage('Thanks For Your Feedback');
    }
    console.log(addMessage);
  return (
    <motion.div initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{scaleY:0}} transition={{duration:0.2}} className="contact">
      <h2>Contact</h2>
      <Row>
          <Col>
            <div className='contact-form'>
                 <Form onSubmit={handleSubmit}>
                      <FormGroup className='mb-3' controlId='validationCustom01'>
                          <FormLabel>Name</FormLabel>
                          <FormControl required type='text' placeholder='Enter Name' />
                      </FormGroup>
                      <FormGroup className='mb-3' controlId='validationCustom02'>
                          <FormLabel>Email</FormLabel>
                          <FormControl required type='email' placeholder='Enter Email' />
                      </FormGroup>
                      <FormGroup className='mb-3' controlId='validationCustom03'>
                          <FormLabel>Message</FormLabel>
                          <FormControl required as="textarea" placeholder='Enter Your Message' />
                      </FormGroup>
                      <Button type='submit'>Submit Form</Button>
                 </Form>
            </div>
          </Col>
          <Col>
              <div className='contact-data'>
                <p>
                  If you want to chat about a project — email me on
                  gandhodijayanth@gmail.com.
                </p>
                <p>
                  I can help designing a website, designing a new product, improving
                  an existing part of your product, building a strong design system,
                  building websites in Webflow, or designing a custom icon set for
                  your business.{" "}
                </p>
                <p>
                  Currently based in BANGLORE, INDIA — available for remote-friendly
                  work from December 2022.
                </p>
                <p className='addMessage'>
                  <ListGroup horizontal>
                      <ListGroupItem>
                         <a href="https://www.linkedin.com/in/jayanth-g-086835166" target="_blank" rel="noreferrer">Linkdin</a>
                      </ListGroupItem>
                      <ListGroupItem>
                         <a href="">Instagram</a>
                      </ListGroupItem>
                      <ListGroupItem>
                         <a href="">twitter</a>
                      </ListGroupItem>
                  </ListGroup>
                </p>
                  
                <p className='addMessage'>{ addMessage }</p>
              </div>
          </Col>
      </Row>
    </motion.div>
  )
}

export default Contact
