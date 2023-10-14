import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';


const experiences = [
  {
    title: "Data Engineer",
    company_name: "TresVista Analytics",
    iconBg: "#383E56",
    date: "July 2022 - May 2023",
    points: [
      "I managed data pipelines for a Canadian investment firm, excelling in Python, PySpark, Databricks, GitHub, Apache Airflow, and AWS.",
      "Collaborated closely with clients to understand their data needs and automated data pipelines for efficiency.",
      "Despite being a fresh graduate, I demonstrated adaptability, strong work ethic, and attention to detail, exceeding expectations.",
      "Recognized for dedication and rapid learning in a new tech stack, delivering impactful results.",
    ],
  },
  {
    title: "Intern",
    company_name: "IDeaS",
    iconBg: "#E6DEDD",
    date: "July 2021 - Dec 2021",
    points: [
      "Developed an audit framework using Javers, EmberJS, Java, and JavaScript during a 6-month software engineering internship.",
      "Collaborated across teams for seamless integration, following agile practices.",
      "Gained hands-on experience, improved code quality, and deepened knowledge of software development.",
      "Acquired proficiency with various technologies and tools.",
      "Ready to apply insights and skills to future software projects.",
    ],
  },
];
 const ExperienceCard =({experience})=>{
  return(
    <VerticalTimelineElement
    contentStyle={{background:"#1d1836",color:"#fff"}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{background:"#1d1836"}}
    icon={
      <div className="flex flex-col  w-full h-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  class="sm:w-12 sm:h-12 h-2 w-2 stroke-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>

      </div>
    }
    >
<div>
  <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
  <p className="text-secondary text-[16px]">
    {experience.company_name}
  </p>
</div>
<ul className="mt-5 list-disc ml-5 space-y-2">
    {experience.points.map((point,index)=>(
      <li key={`experience-point-${index}`}
      className="text-white-100 text-[14px]
      pl-1 tracking-wider"
      >
        {point}
      </li>
    ))}
</ul>
    </VerticalTimelineElement>
  )
 }

const Experience = () => {
  return (
    <div id="experience" className='flex flex-col w-full h-fit my-20'>
      <div className="flex flex-col w-[90%] mx-[5%]">
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
          What I have done so far
        </p>
        <h2 className='text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Work Experience
        </h2>
      </div>

      <div className="sm:mt-20 flex flex-col sm:w-[90%] sm:ml-[6%]   mt-6 mr-2">
          <VerticalTimeline>
            {experiences.map((experience,index)=>{
              return(
                <ExperienceCard key={index} experience={experience}/>
              )
            })}
          </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience;