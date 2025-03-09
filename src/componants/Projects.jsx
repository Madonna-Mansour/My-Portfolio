import coffee from '../assets/coffee.png'
import rosaa from '../assets/rossa3.jpg'
import neww from '../assets/new.png'
import botiga from '../assets/botiga.png'
import criativo from '../assets/criativo.png'
import fior from '../assets/fior.png'
import khamsat from '../assets/khamsat.png'
import land from '../assets/rosa-land.png'
import time  from '../assets/time zone.png'




const Projectss = [
    { id: 1, img: coffee , path:"https://coffee-teal-alpha.vercel.app/" },
    { id: 2, img: rosaa , path: "https://rosaa-virid.vercel.app/"},
    { id: 3, img: neww , path: "https://new-home-six.vercel.app/"},
    { id: 4, img: botiga , path: "https://botiga-xi.vercel.app/"},
    { id: 5, img: criativo , path: "https://criativo-livid.vercel.app/"},
    { id: 6, img: fior , path: "https://fiore-rho.vercel.app/"},
    { id: 7, img: khamsat , path: "https://cute-liger-d4aa79.netlify.app/"},
    { id: 8, img: land , path: "https://rose-land.vercel.app/"},
    { id: 9, img: time , path: "https://time-zone-gamma.vercel.app/"},
];

const Projects = () => {
  return (
    <div className='blue p-10'>
        <div className=" container mx-auto grid grid-cols-1 ">

            <div className='pt-[100px]'>
                <p className='text-gray-400 text-2xl'>|| Special Skills</p>
                <h1 className='text-[60px] my-5'>My Special <b /> Skill Field Here.</h1>
             </div>

             <ul className=' gallery grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 mt-20'>
                        {Projectss.map((project) => (
                          <li className='overflow-hidden'   key={project.id}>
                             <a  href={project.path} >                             
                              <img className='h-[240px] w-[370px] rounded-md mb-10 hover:scale-105 transition-all ' src={project.img} alt="" />                        
                             </a>
                          </li>
                        ))}
             </ul>
        </div>
    </div>
  )
}

export default Projects
