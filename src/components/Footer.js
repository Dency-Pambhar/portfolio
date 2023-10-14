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
            <img className='w-16 object-cover mx-2' src={github} alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/dency-pambhar-5869a8190/">
            <img className='w-16 object-fill mx-2' src={linkedin} alt="linkedin"/>
        </a>
        <a href="https://www.instagram.com/dency_pambhar/" >
            <img className='w-16 object-cover mx-2' src={insta} alt="instagram"/>
        </a>
    </div>

    <div className='pb-2 text-white'>Made with <span className='animate-pulse'>🧠</span> and <span className='animate-pulse'>🧡</span> by Dency</div>
</div>
</div>
    )
}


export default Footer;