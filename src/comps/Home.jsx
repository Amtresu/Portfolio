import React from 'react';
import { anticipate, motion } from 'framer-motion';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/all'
import { childVariants, containerVariants, headerVariants, paragraphVariant, iconVariants } from '../variants/homeVariants';

const HomePage = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial='initial'
            transition='transition'
            animate='animate'
            className='home-div'>
            <motion.h1
                variants={headerVariants}
                animate='animate'
                transition='transition'
                className='title'>Conor J. Follette</motion.h1>
            <motion.p className='border'
                variants={childVariants}
                transition='transition'
                initial='initial'
                animate='animate'
            ></motion.p>
            <motion.p
                variants={paragraphVariant}
                initial='initial'
                animate='animate'
                transition='transition'
            >I create beatiful things for the web</motion.p>
            <div className='icon-div'>
                <motion.a
                    variants={iconVariants}
                    initial='initial'
                    animate='animate'
                    transition='transition'
                    whileHover='whileHover'
                    href='https://www.linkedin.com/in/conor-follette/'
                ><AiFillLinkedin className='home-icon'></AiFillLinkedin></motion.a>
                <motion.a
                    variants={iconVariants}
                    initial='initial'
                    animate='animate'
                    transition='transition'
                    whileHover='whileHover'
                    href='https://github.com/Amtresu'
                ><AiFillGithub className='home-icon'></AiFillGithub></motion.a>
            </div>
        </motion.div>
    );
}

export default HomePage;
