import React, {useState} from "react";
import { motion } from "framer-motion";
import video from '../../Assets/science.mp4'
import image1 from '../../Assets/image1.jpeg'
import image2 from '../../Assets/image2.webp'
import image3 from '../../Assets/image3.webp'
import image4 from '../../Assets/image4.webp'
import image5 from '../../Assets/image5.webp'
import hand from '../../Assets/hand.webp'
const Main = () => {

  const [showTextBoxOne, setShowTextBoxOne] = useState(false);
  const [showTextBoxTwo, setShowTextBoxTwo] = useState(false);
  const [showTextBoxThree, setShowTextBoxThree] = useState(false);
  const [showTextBoxFour, setShowTextBoxFour] = useState(false);
  const [showTextBoxFive, setShowTextBoxFive] = useState(false);

  const handleClickOne = () => {
    setShowTextBoxOne(true);
  };

  const handleClickTwo = () => {
    setShowTextBoxTwo(true);
  };

  const handleClickThree = () => {
    setShowTextBoxThree(true);
  };

  const handleClickFour = () => {
    setShowTextBoxFive(true);
  };

  const handleClickFive = () => {
    setShowTextBoxFive(true);
  };

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
  onClick={handleClickOne} 
  className="cursor-pointer"
  whileHover={{scale: 1.1,}}>
  <img className="rounded-md" 
  src={image1}></img>
  </motion.div>
  
  {
    <div className="flex justify-center items-center">
      {showTextBoxOne && (
        <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
          <div className="bg-white rounded-lg p-8 max-w-3xl">
            <h1 className="text-xl mb-4">Molecular Biology</h1>
            <p>At Elemental Analytics, we specialize in providing cutting-edge molecular biology solutions tailored to meet the diverse needs of researchers, academic institutions, and biotech organizations. Our mission is to empower scientific discovery and innovation through precise, reliable, and efficient molecular biology services.</p>
            <button 
            className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded
            "
            onClick={() => setShowTextBoxOne(false)}
            >
            Close
            </button>
          </div>
        </div>
      )}

    </div>
  }


  
  <motion.div 
  onClick={handleClickTwo}
  className="cursor-pointer"
  whileHover={{scale: 1.1,}}>
  <img className="rounded-md" src={image2}></img>
  </motion.div>

  {
    <div className="flex justify-center items-center">
      {showTextBoxTwo && (
        <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
          <div className="bg-white rounded-lg p-8 max-w-3xl">
            <h1 className="text-xl mb-4">Immunology</h1>
            <p>Nani nani</p>
            <button 
            className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded
            "
            onClick={() => setShowTextBoxTwo(false)}
            >
            Close
            </button>
          </div>
        </div>
      )}

    </div>
  }






 
  <motion.div 
  onClick={handleClickThree}
  className="cursor-pointer"
  whileHover={{scale: 1.1,}}>
  <img className="rounded-md" src={image3}></img>
  </motion.div>


  {
    <div className="flex justify-center items-center">
      {showTextBoxThree && (
        <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
          <div className="bg-white rounded-lg p-8 max-w-3xl">
            <h1 className="text-xl mb-4">Biochemistry</h1>
            <p>Nani nani</p>
            <button 
            className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded
            "
            onClick={() => setShowTextBoxThree(false)}
            >
            Close
            </button>
          </div>
        </div>
      )}

    </div>
  }



 
  <motion.div 
  onClick={handleClickFour}
  className="cursor-pointer"
  whileHover={{scale: 1.1,}}>
  <img className="rounded-md" src={image4}></img>
  </motion.div>


  {
    <div className="flex justify-center items-center">
      {showTextBoxFour && (
        <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
          <div className="bg-white rounded-lg p-8 max-w-3xl">
            <h1 className="text-xl mb-4">Artificial Intelligence & Data </h1>
            <p>Nani nani</p>
            <button 
            className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded
            "
            onClick={() => setShowTextBoxFour(false)}
            >
            Close
            </button>
          </div>
        </div>
      )}

    </div>
  }

 
  <motion.div 
  onClick={handleClickFive}
  className="cursor-pointer"
  whileHover={{scale: 1.1,}}>
  <img className="rounded-md" src={image5}></img>
  </motion.div>

  {
    <div className="flex justify-center items-center">
      {showTextBoxFive && (
        <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
          <div className="bg-white rounded-lg p-8 max-w-3xl">
            <h1 className="text-xl mb-4">Microbiology</h1>
            <p></p>
            <button 
            className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded
            "
            onClick={() => setShowTextBoxFive(false)}
            >
            Close
            </button>
          </div>
        </div>
      )}

    </div>
  }



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



};
export default Main;