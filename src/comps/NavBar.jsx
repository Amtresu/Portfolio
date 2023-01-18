import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/all'
import ReactSwitch from "react-switch";
import { navBarVariants } from "../variants/navBarVariants";



const NavBar = ({ toggleTheme }) => {

  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
    toggleTheme();
  };
  return (
    <div className="sidenav">
      <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover' href="#Home">Home</motion.a>
      <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover' href="#About">About</motion.a>
      <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover' href="#Projects">Projects</motion.a>
      <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover' href="#Contact">Contact</motion.a>
      <ReactSwitch
        onChange={handleChange}
        checked={checked}
        uncheckedIcon={<BsFillSunFill className="sun" />}
        checkedIcon={<BsFillMoonFill className="moon" />}
        className='switch'></ReactSwitch>


    </div>

  );
};
export default NavBar;