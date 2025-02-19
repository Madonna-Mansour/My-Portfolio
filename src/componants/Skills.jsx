// import {progress} from 'react'
const Skills = () => {
  return (
    <div className='dark p-10'>
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 ">

             <div className='pt-[150px]'>
                <p className='text-gray-400 text-2xl'>|| Special Skills</p>
                <h1 className='text-[60px] my-5'>My Special <b /> Skill Field Here.</h1>
             </div>

             <div className="w-[80%] flex  flex-col ms-[50px] ">

                <div className="mb-10  bg-[#282846f3] p-5 ">
                <div className="flex justify-between text-2xl ">
                <p>Communication</p>
                        <p>100%</p>
                    </div>
                    <progress className='w-[100%] h-2' value={1} />
                </div>

                <div className="mb-10  bg-[#282846f3] p-5 ">
                    <div className="flex justify-between text-2xl ">
                        <p>Leadership</p>
                        <p>100%</p>
                    </div>
                    <progress className='w-[100%] h-2' value={1} />
                </div>

                <div className="mb-10  bg-[#282846f3] p-5 ">
                <div className="flex justify-between text-2xl ">
                <p>Teamwork</p>
                        <p>100%</p>
                    </div>
                    <progress className='w-[100%] h-2' value={1} />
                </div>

                <div className="mb-10  bg-[#282846f3] p-5 ">
                <div className="flex justify-between text-2xl ">
                <p>Flexibility</p>
                        <p>100%</p>
                    </div>
                    <progress className='w-[100%] h-2' value={1} />
                </div>
                

             </div>

        </div>
    </div>
  )
}

export default Skills