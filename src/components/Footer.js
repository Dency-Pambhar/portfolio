import React from 'react';
import github from '../assets/tech/github.png'
import linkedin from '../assets/tech/linkedin.png'
import insta from '../assets/tech/instagram.png'


const Footer =()=>{
    return(
        <div className='green-pink-gradient shodow-card mx-[5%] p-[1px] rounded-t-xl '>
<div className='flex flex-col bg-black rounded-t-xl
 w-full justify-center items-center '>
    <p className="mt-4 text-lg font-bold text-violet-700">FIND ME ON </p>
    <div className='my-8 flex flex-row'>
        <a  href="https://github.com/Dency-Pambhar">
            <img className='lg:w-16 w-12 object-cover mx-2 hover:scale-110' src={github} alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/dency-pambhar-5869a8190/">
            <img className='lg:w-16 w-12 object-fill mx-2 hover:scale-110' src={linkedin} alt="linkedin"/>
        </a>
        <a href="https://www.instagram.com/dency_pambhar/" >
            <img className='lg:w-16 w-12 object-cover mx-2 hover:scale-110' src={insta} alt="instagram"/>
        </a>
    </div>
    <div className='green-pink-gradient h-[1px] w-full'></div>
    <div className='my-2 text-white'>Made with <span className='animate-pulse'>🧠</span> and <span className='animate-pulse'>🧡</span> by Dency</div>
</div>
</div>
    )
}


export default Footer;