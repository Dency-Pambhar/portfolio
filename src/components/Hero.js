// import {motion} from 'framer-motion'
// import { styles } from '../styles'
// import { ComputersCanvas } from './canvas'
import Particle from "./Particle";
import homeLogo from "../assets/desktop.jpg";
import greet from "../assets/greeting.png";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
<section className='relative w-full h-fit overflow-x-hidden mx-auto'>
  <Particle />
  <div className=" sm:w-[90%] w-[100%] z-10 absolute inset-0 sm:top-[95px] top-[60px] max-w-7xl mx-auto flex sm:flex-row flex-col sm:justify-between gap-5">
  <div className="sm:hidden flex w-[100%] flex flex-col items-center mt-[5%] ">
      <Tilt>
          <img
            src={greet}
            alt="home pic"
            className="h-[300px] bg-violet-500/[0.8] "
            style={{ borderRadius:"9999px", boxShadow:"0 0 300px rgba(0, 0, 0, 0.5)", marginRight:"10%"}}
          />
      </Tilt>
    </div>
    
    <div className="sm:w-[50%] sm:h-[50%]  w-[100%]  flex flex-row sm:mt-[10%]">
      <div className='flex flex-col sm:pl-0 pl-2 items-center'>
        <div className='h-5 w-5 rounded-full bg-[#915eff]'/>
        <div className='sm:h-80 h-40 w-2 violet-gradient'/>
      </div>
      <div className="sm:p-4 p-2 flex flex-col">
          <h1 className="text-white lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[40px] lg:leading-[88px]">
            Hi <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>,I am <span className='text-[#915eff]'>Dency</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[20px] xs:text-[12px] text-[16px] lg:leading-[30px]">
          Passionate developer crafting innovative solutions, bridging imagination with technology, one line of code at a time
          </p>
      </div>
    </div>
    
    <div className="sm:flex hidden w-[40%] h-[80%] flex items-center ">
      <Tilt>
          <img
            src={homeLogo}
            alt="home pic"
            className="img-fluid m-auto w-[60%]"
            style={{ borderRadius:"9999px", boxShadow:"0 0 300px rgba(0, 0, 0, 0.5)"}}
          />
      </Tilt>
    </div>
  </div>
  
</section>
  )
}

export default Hero