import React from 'react';
import { anticipate, motion } from 'framer-motion'

const containerVariants = {
    initial: {
        y: -250,
        duration: 5
    },
    animate: {
        y: 0,
        transition: {
            type: 'spring',
            ease: anticipate,
            duration: 3,
            delayChildren: 10,
        },
    }
}

const childVariants = {
    initial: {
        width: 0
    },
    animate: {
        width: 'auto',
        transition: {
            duration: 3,
        },
    },
}

const HomePage = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial='initial'
            transition='transition'
            animate='animate'
            className='home-div'>
            <motion.h1
                animate={{
                    color: ["#FF5733", "#64d86b", '#CF9FFF'],
                    transition: {
                        delay: 1,
                        duration: 2,
                        ease: [0.075, 0.82, 0.165, 1],
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }} className='title'>Conor J. Follette</motion.h1>
            <motion.p className='border'
                variants={childVariants}
                transition='transition'
                initial='initial'
                animate='animate'
            ></motion.p>
            <motion.p 
            initial={{
                opacity: 0
            }}
            transition={{
                delay: 2.2
            }}
            animate={{ 
                opacity: 1
            }}
            >I create beatiful things for the web</motion.p>
        </motion.div>
    );
}

export default HomePage;
