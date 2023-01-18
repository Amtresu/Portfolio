import React from 'react';
import { anticipate, motion } from 'framer-motion';
import { childVariants, containerVariants, headerVariants, paragraphVariant } from '../variants/homeVariants';

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
        </motion.div>
    );
}

export default HomePage;
