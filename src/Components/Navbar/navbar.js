import React from "react";


const Navbar = () => {

return (
   
    <header className='py-5 px-25 top-0 left-0 justify-between flex items-center w-full z-[100]'>
      <a className='logo'>
      Elemental Analytics
      </a>
      <nav className='flex gap-7'>
        <a className='' href="/">
          Home
        </a>

        <a className='/about' href='#'>
          About
        </a>

        <a className='/careers'>
          Careers
          
        </a>
        <a className='/industries'>
          Industries
        </a>

      </nav>
      
    </header>
   
);


}

export default Navbar;