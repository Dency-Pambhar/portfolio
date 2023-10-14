import React from 'react';
import airflow from '../assets/tech/airflow.jpg';
import css from '../assets/tech/css.png';
import databricks from '../assets/tech/databricks.png'
import git from '../assets/tech/git.png'
import html from '../assets/tech/html.png'
import java from '../assets/tech/java.png'
import javascript from '../assets/tech/javascript.png'
import mysql from '../assets/tech/mysql.png'
import nodejs from '../assets/tech/nodejs.png'
import python from '../assets/tech/python.jpg'
import reactjs from '../assets/tech/reactjs.png'
import tailwind from '../assets/tech/tailwind.png'
import typescript from '../assets/tech/typescript.png'


const Skills =()=>{
    const technologies = [
        {
          name: "HTML 5",
          icon: html,
        },
        {
          name: "CSS 3",
          icon: css,
        },
        {
          name: "JavaScript",
          icon: javascript,
        },
        {
          name: "TypeScript",
          icon: typescript,
        },
        {
          name: "React JS",
          icon: reactjs,
        },
        {
          name: "Java",
          icon: java,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
        {
          name: "Node JS",
          icon: nodejs,
        },
        {
          name: "Python",
          icon: python,
        },
        {
          name: "Databricks",
          icon: databricks,
        },
        {
          name: "git",
          icon: git,
        },
        {
          name: "Airflow",
          icon: airflow,
        },
        {
          name: "mysql",
          icon: mysql,
        },
      ];    
    return(
        <div id="skills" className='flex flex-col w-full h-fit my-16'>
            <div className='w-[90%] mx-[5%]'>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Technologies,that i know and want to learn more </p>
                <h2 className="text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Skills</h2>
            </div>
            <div className='flex flex-row flex-wrap justify-between sm:justify-start mx-[5%] w-[90%]'>
                {technologies.map((item) =>{
                    return(
                        <div className='green-pink-gradient sm:w-[10%] w-[20%] p-[2px] mr-[2%] my-[1%] rounded-xl'>
                            <div className='bg-black rounded-xl w-full rounded-xl  h-[100%] flex flex-row justify-between'>
                                <div className=" flex rounded-full">
                                    <img src={item.icon} alt={item.name} className='object-contain h-[100%] p-2' />
                                </div>
                            </div>            
                        </div>
                    )})}
            </div>
        </div>
    )
}


export default Skills;