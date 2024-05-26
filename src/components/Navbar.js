import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import resume from '../assets/Dency_resume.pdf';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  
  const navLinks = [
    { id: "about", title: "About" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
  ];

  return (
    <nav className={`px-2 w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="sm:w-[90%] w-[100%] flex justify-between items-center mx-auto">
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer">
            DP
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"}
               hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <a 
            className="bg-[#915eff] rounded-xl py-2 px-4"
            href={resume}
            download="Dency_Resume.pdf"
          >
            Resume
          </a>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' onClick={() => {
            setToggle(!toggle);
          }} />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-[#050816] black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"}
                   font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <a 
                className="bg-[#915eff] rounded-xl py-2 px-4"
                href={resume}
                download="Dency_Resume.pdf"
                
              >
                Resume
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
