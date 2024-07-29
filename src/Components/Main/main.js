import React from "react";
import { motion } from "framer-motion";
import video from '../../Assets/science.mp4'
import images from '../../Assets/images'
const Main = () => {

return(
<section className="w-full relative m-auto justify-center pt-4 items-center">
    
    <div className=" h-96 w-full top-0 bottom-0 overflow-hidden">
    <video  src={video} muted autoPlay loop type="science/mp4"></video>
   </div>
   
  <div className="p-5">
  <h1> What We Offer</h1>
  <motion.div className=" flex  h-full">
  {images.map(image => {
 return(
    <motion.div 
    whileHover={{ scale: 1.1, }}
    
    className="flex m-2 overflow-hidden  ">
      <img className="cursor-pointer rounded-md" alt="science"
      src={image}/>
    </motion.div>
    ); 
  })}

  </motion.div>
  </div>
  <div>
    <h1>About Us</h1>
  </div>


   
    
    
    
</section>
);



}
export default Main;