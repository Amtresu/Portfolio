import React from 'react';
import { SiRuby, SiRubyonrails, AiFillHtml5, DiCss3, DiJavascript1, FaReact, SiRedux, BsFillBootstrapFill, SiTailwindcss } from 'react-icons/all'
import { motion } from "framer-motion";
import { ulVariants, iconVariants } from '../variants/aboutPageVariants'; 
import photo from '../assets/rsz_2rsz_shot.jpg'


const AboutMe = () => {
    return (
        <div className="about-me">
            <p className='about-me-paragraph'>
                Howdy, I'm Conor and I love coding! I've spent the past year learning the ins and outs of being a great fullstack developer. My favorite stack is Ruby on Rails backend with a React based front end. I work everyday to make my projects clean, effecient, and looking amazing! Thanks for taking a look at my portfolio. 
            </p>
            <div>
                <img src={photo} className='shot'/>
            </div>
            <div>
                <motion.ul
                    variants={ulVariants}
                    animate='animate'
                    transition='transition'
                    className='stack'>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        initial='initial'
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.ruby-lang.org/en/'><SiRuby className='stack-icon' /></a>
                    </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://rubyonrails.org/'><SiRubyonrails className='stack-icon' /></a></motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'><AiFillHtml5 className='stack-icon' /></a> </motion.li>
                    <motion.li variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'><DiCss3 className='stack-icon' /></a></motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'><DiJavascript1 className='stack-icon' /></a></motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://reactjs.org/'><FaReact className='stack-icon' /></a></motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <SiRedux className='stack-icon' /></motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://getbootstrap.com/'><BsFillBootstrapFill className='stack-icon' /></a></motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://tailwindcss.com/'><SiTailwindcss className='stack-icon' /></a></motion.li>
                </motion.ul>
            </div>
        </div>
    );
}

export default AboutMe;
