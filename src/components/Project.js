import React from 'react';
import laptop from '../assets/poschh1.png'
import workout from '../assets/workout.png';


const Projects =()=>{
    const project = [
       { name : 'Poschh Real Estate Website',
         image: laptop,
         desc: 'Developed responsive, user-friendly poschh.com front-end using React and Tailwind CSS for seamless user experience and cross-device accessibility.',
         link: 'http://poschh.com',
        },
        { name : 'AI Powered workout planner',
         image: workout,
         desc: 'AI-driven workout planner app that utilises Python and OpenAI API for personalized fitness plans, with React and Redux for an engaging frontend.',
         link: 'https://github.com/Dency-Pambhar/workout_planner',
        },
    ];
    return(
        <div id="projects" className='flex flex-col w-full h-fit my-16'>
            <div className='w-[90%] mx-[5%]'>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Some of my works </p>
                <h2 className="text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects</h2>
            </div>
            <div className='flex flex-row flex-wrap justify-between sm:justify-start items-center mx-[5%] w-[90%]'>
                {project.map((item) =>{
                    return(
                        <div className="bg-violet-800/[0.8] max-w-sm mr-[5%] my-[3%] rounded-xl w-[350px] h-[400px] flex flex-col items-center overflow-hidden shadow-lg">
                            <a href={item.link} rel="noreferrer" target="_blank" className='mx-[5%]'><img className="w-[300px] h-[200px] object-cover rounded-2xl my-4" src={item.image} alt={item.name} /></a>
                            <div className="px-6 my-4">
                                <div className="font-bold text-xl flex items-center text-white mb-2">{item.name}</div>
                                <p className="text-white text-base">{item.desc}</p>
                            </div>
                        </div>
                    )})}
            </div>
        </div>
    )
}


export default Projects;