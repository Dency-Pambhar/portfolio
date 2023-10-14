import React from 'react';
import Tilt  from "react-parallax-tilt";
import me from '../assets/me.png';

const About = () => {
  return (
    <div id="about" className='flex flex-col w-full h-fit'>
        <div className='w-[90%] mx-[5%]'>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
            <h2 className="text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">About Me</h2>
        </div>
        <div className='w-[90%] mx-[5%]  flex sm:flex-row flex-col-reverse justify-between items-center'>
            <p className='text-secondary text-[17px] sm:w-[65%] w-[90%] leading-[30px]'>
                I am a motivated and enthusiastic software engineering graduate, eager to kickstart my career in the field. 
                With a strong educational background and a passion for coding, I am excited to apply my knowledge and skills 
                to real-world projects. I have a solid foundation in OOPs, Java, Python, Databricks, Apache airflow DAGs, AWS,
                 SQL and I am eager to expand my expertise further. As a quick learner, I am open to new challenges and 
                 dedicated to continuous learning. I am a team player, always ready to contribute and collaborate effectively. 
                 I am excited about the opportunity to work with innovative teams and contribute to the development of 
                 cutting-edge software solutions.
            </p>
            <div className=" flex sm:w-[30%] w-[90%]">
                <Tilt>
                    <img
                        src={me}
                        alt="MY pic"
                        className=""
                        style={{ borderRadius:"9999px", boxShadow:"0 0 300px rgba(0, 0, 0, 0.5)"}}
                    />
                </Tilt>
            </div>
        </div>
        
    </div>
  )
}

export default About;