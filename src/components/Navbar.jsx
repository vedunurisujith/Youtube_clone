import React from 'react'
import youtube_logo from "../../src/assets/youtube_logo.png"

import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-slate-600 fixed drop-shadow-lg flex flex-row justify-between'>
      <div className=' w-[90px] h-[80px] m-3'> 
      <img src= {youtube_logo} className="object-fill" alt='youtube' /></div>
      <div className='bg-cyan-300 w-60 h-5 m-5'>
  
      </div>
      <div className='bg-cyan-300 w-8 h-5 m-5'> 
      
      </div>
          <div className='bg-cyan-300  w-10 h-10  object-fit m-5'>
            <CgProfile className=''/>
            

        </div>

</div>
  )
}

export default Navbar