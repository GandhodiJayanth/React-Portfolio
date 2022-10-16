import React from 'react';
import {motion} from 'framer-motion';  

const Home = () => {
  return (
    <div className='home'> 
        <motion.div className='name' initial={{x: -400, scale: 0.5}} animate={{x:0, scale: 1}} transition={{duration: 1}}>Gandhodi <font>Jayanth</font></motion.div>
             <motion.div className='desc'  initial={{x: 400, scale: 0.5}} animate={{x:0, scale: 1}} transition={{duration: 1}}>
                      {/* <div id='flip'>
                         <div><div>HTML</div></div>
                         <div><div>CSS</div></div>
                         <div><div>JS</div></div>
                         <div><div>REACTJS</div></div>
                       </div>  */}
                     <font>ReactJS</font> Developer based in <font>INDIA</font>
             </motion.div>
    </div>
  )
}

export default Home
