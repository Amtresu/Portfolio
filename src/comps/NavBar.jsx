import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsFillSunFill, BsFillMoonFill, TbLetterC } from 'react-icons/all'
import ReactSwitch from "react-switch";


const NavBar = ({ toggleTheme }) => {

  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
    toggleTheme();
  };
  return (
    <div className="sidenav">
       <motion.a
        animate={{
          rotate: 90,
          color: 'inherit'
        }}
        whileHover={{
          scale: 1.3,
          rotate: 360,
          color: '#64d86b'
        }} href="#Home">Home</motion.a>
      <motion.a
        animate={{
          rotate: 90,
          color: 'inherit'
        }}
        whileHover={{
          scale: 1.3,
          rotate: 360,
          color: '#64d86b'
        }} href="#About">About</motion.a>
      <motion.a
        animate={{
          rotate: 90,
          color: 'inherit'
        }}
        whileHover={{
          scale: 1.3,
          rotate: 360,
          color: '#64d86b'
        }} href="#Projects">Projects</motion.a>
      <motion.a
        animate={{
          rotate: 90,
          color: 'inherit'
        }}
        whileHover={{
          scale: 1.3,
          rotate: 360,
          color: '#64d86b'
        }} href="#Contact">Contact</motion.a>
      <ReactSwitch onChange={handleChange} checked={checked} uncheckedIcon={<BsFillSunFill className="sun" />} checkedIcon={<BsFillMoonFill className="moon" />} className='switch'></ReactSwitch>


    </div>

  );
};
export default NavBar;