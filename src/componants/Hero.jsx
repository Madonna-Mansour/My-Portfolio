import me from '../assets/me.png'
import Madonna from '../assets/Madonna.pdf'
import { LuDownload } from "react-icons/lu";
import { Link } from 'react-router-dom';




const Hero = () => {
  return (
    <div className='dark HERO p-10 pb-0'>
        <div className=" container overflow-hidden mx-auto grid grid-cols-1 md:grid-cols-2 flex justify-center items-center ">
            <div className="">
                    <h1  className='py-3 text-[70px] font-bold'>Hello! I’m <br /> Madonna Mansour</h1>
                    <p className='text-gray-400 mt-4' >Front End Developer</p>
                    <button  className=' w-[220px] h-[75px] rounded-[50px] mt-7 border border-collaps hover:bg-gray-500'>
                        <div className=''>
                            <a href={Madonna} download='Madonna cv' className='text-white flex justify-center items-center' style={{textDecoration:"none"}} >
                              Get Resume 
                              <LuDownload className='ml-4'/>
                            </a>    
                        </div> 
                    </button>
             </div>

        <div className="">
          
            <img className='mt-[140px] h-[550px] w-[550px] '  src={me} alt=""  />
        </div>

        </div>
    </div>
  )
}

export default Hero