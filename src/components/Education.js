import React from 'react';
import mit from '../assets/logo.webp';


const Education =()=>{
    const edu = [{
        logo: mit,
        name: "MIT World Peace University, Pune",
        course: "Bachelor of Technology in Computer Science",
        duration: "June 2018-May 2022",
    }];
    return(
        <div id="education" className='flex flex-col w-full h-fit'>
            <div className='w-[90%] mx-[5%]'>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">ACADEMIC PROFILE</p>
                <h2 className="text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">My Education</h2>
            </div>
            {edu.map((item) =>{
                return(
                    <div className='green-pink-gradient sm:w-[90%] sm:mx-[5%] mx-4 p-[1px] my-4 rounded-xl flex sm:flex-row flex-col'>
                        <div className='bg-black rounded-xl w-full rounded-xl  flex sm:flex-row items-center flex-col'>
                        <div className=" flex sm:w-[15%] w-[90%] m-4 rounded-full bg-white">
                            <img src={item.logo} alt="education" className='object-contain rounded-full p-4' />
                        </div>
                        <div className='text-secondary sm:h-[90%] sm:w-[80%] sm:ml-[2%] sm:mb-0 mb-4 w-[90%]'>
                            <p className="text-white sm:text-[40px] xs:text-[30px] text-[20px]">{item.name}</p>
                            <p className="sm:text-[18px] text-[14px] font-medium text-secondary uppercase tracking-wider">{item.course}</p>
                            <p className="sm:text-[16px] text-[12px] text-secondary uppercase tracking-wider ">{item.duration}</p>
                        </div>
                        </div>            
                    </div>
                )})}
            
        </div>
    )
}


export default Education;