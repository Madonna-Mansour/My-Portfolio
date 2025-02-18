import develop from '../assets/deve.webp'

const Skills = [
    { id: 1, title: "HTML" },
    { id: 2, title: "CSS" },
    { id: 3, title: "Java Script" },
    { id: 4, title: "React js" },
    { id: 5, title: "Bootstrap" },
    { id: 6, title: "Tailwind" },
    { id: 7, title: "Vite" },
    { id: 8, title: "Responsive Design" },
];

const Services = () => {
  return (
    <div className='blue p-10'>
        <div className="container mx-auto grid grid-cols-1">

            <div>
                <p className='text-gray-400 text-2xl'>|| My Services</p>
                <h1 className='text-5xl my-5'>Service Provide For You.</h1>
             </div>

             <div className=" flex text- justify-center my-20">
                   <div className=" text-center">
                    <div className=" flex justify-center"> 
                          <img className='w-[45px]' src={develop} alt="" /></div>
                    <h2 className='text-2xl mt-7 font-bold'>Development</h2>
                </div>
             </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3">
                {Skills.map((skill)=>(
                    <div key={skill.id} className='w-[300px] h-[120px] border border-collapse rounded-[25px] flex justify-center text-center items-center mb-20 hover:bg-gray-500 transition-all' >
                        <h2 className='text-2xl '>{skill.title}</h2>
                    </div>

                ))}

               


            </div>

        </div>
    </div>
  )
}

export default Services