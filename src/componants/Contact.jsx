import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


const Contact = () => {
  return (
    <div className='dark pt-20 p-20'>
        <div className=" container mx-auto grid grid-cols-1 ">
            
            <div className="flex justify-center text-center ">
                <div className="">
                <div className="">
                <p className='text-gray-400 text-2xl'>|| Get Latest Updates</p>
                <h1 className='text-6xl my-5'>Subscribe For Newsletter</h1>
                </div>
                <div className="my-20">
                    <input placeholder='Madonna Mansour Helmy' className='w-[380px] h-[60px] rounded-[50px] p-4 bg-transparent mr-10 border border-collaps' type="text" /> 
                    <button className='w-[170px] h-[60px] rounded-[50px] mt-7 border border-collaps hover:bg-gray-500'>Subscribe Now</button>
                </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 ">

                   <div className="flex items-center ">
                        <button className='w-10 h-10 border hover:bg-gray-500 rounded-[50%] flex justify-center items-center mr-5'><FaPhoneAlt /></button>
                        <p className='text-[20px]'>01067514330</p>
                    </div>

                    <div className="flex items-center my-10">
                        <button className='w-10 h-10 border hover:bg-gray-500 rounded-[50%] flex justify-center items-center mr-5'><MdEmail />
                        </button>
                        <p className='text-[20px]'>madonnamansour57@gmail.com
                        </p>
                    </div>

                    <div className="flex items-center justify-center  ">
                    <a href="https://www.linkedin.com/in/madonna-mansour-helmy-93a0a020a/" ><FaLinkedinIn className="text-[30px] mr-10" /></a>
                    <a href="https://github.com/Madonna-Mansour" ><IoLogoGithub className="text-[30px]" /></a>
                
                  </div>

            </div>

        </div>
    </div>
  )
}

export default Contact