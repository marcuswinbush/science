import React from "react";
import { motion } from "framer-motion";
import video from '../../Assets/science.mp4'
import image1 from '../../Assets/image1.jpeg'
import image2 from '../../Assets/image2.webp'
import image3 from '../../Assets/image3.webp'
import image4 from '../../Assets/image4.webp'
import image5 from '../../Assets/image5.webp'
import hand from '../../Assets/hand.webp'
const Main = () => {

  

return(
<section className="w-full relative m-auto justify-center pt-4 items-center">
    
    <div className=" h-96 w-full top-0 bottom-0 overflow-hidden">
    <video  src={video} muted autoPlay loop type="science/mp4"></video>
   </div>
   
 
  <div className="p-5">
  <h1> What We Offer</h1>
  
  

  
<motion.div className=" flex  h-full">

 <div className="flex gap-3" >
 
  <motion.div 
  className="cursor-pointer"
  whileHover={{scale: 1.1,}}>
  <img className="rounded-md" 
  src={image1}></img>
  </motion.div>
  
  <motion.div 
  className="cursor-pointer"
  whileHover={{scale: 1.1,}}>
  <img className="rounded-md" src={image2}></img>
  </motion.div>
 
  <motion.div 
  className="cursor-pointer"
  whileHover={{scale: 1.1,}}>
  <img className="rounded-md" src={image3}></img>
  </motion.div>
 
  <motion.div 
  className="cursor-pointer"
  whileHover={{scale: 1.1,}}>
  <img className="rounded-md" src={image4}></img>
  </motion.div>
 
  <motion.div 
  className="cursor-pointer"
  whileHover={{scale: 1.1,}}>
  <img className="rounded-md" src={image5}></img>
  </motion.div>


</div>

 </motion.div>
  </div>
  <div className="m-7 ">
    <h1>About Us</h1>
    <div className="flex justify-between items-center">
    <p className="flex-1 pr-5">
      We provide a variety of different branches of science. From environmental to AI, be apart of our non-profit organization for the aid of start-up companies. Be apart of the future of science!
    </p>
    <img className="max-w-80 h-auto" src={hand}>
    </img>
    </div>
   
  </div>


   
    
    
    
</section>
);



}
export default Main;