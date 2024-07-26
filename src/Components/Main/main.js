import React from "react";
import video from '../../Assests/science.mp4'
const Main = () => {

return(
<section className="w-full relative m-auto justify-center pt-8 items-center">
    
    <div className=" h-96 w-full top-0 bottom-0 overflow-hidden">
    <video  src={video} muted autoPlay loop type="science/mp4"></video>
   </div>
   
  <div>
  <h1>What we Offer</h1>
  </div>


   
    
    
    
</section>
);



}
export default Main;