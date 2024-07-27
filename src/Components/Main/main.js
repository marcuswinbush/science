import React from "react";
import { motion } from "framer-motion";
import video from '../../Assets/science.mp4'
import images from '../../Assets/images'
const Main = () => {

return(
<section className="w-full relative m-auto justify-center pt-8 items-center">
    
    <div className=" h-96 w-full top-0 bottom-0 overflow-hidden">
    <video  src={video} muted autoPlay loop type="science/mp4"></video>
   </div>
   
  <div className="p-5">
  <h1>What we Offer</h1>
  <div className="w-3/4 flex">
  {images.map(image => {
 return(
    <div>
      <img src={image}/>
    </div>
    );
  })}

  </div>
  </div>


   
    
    
    
</section>
);



}
export default Main;