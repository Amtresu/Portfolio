import React from 'react';
import { motion } from 'framer-motion';
import { BsGithub } from "react-icons/bs";
import { buttonVariants, ghlinkVariants } from '../variants/buttonVariants';
import { projectsData } from '../projectsData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '/src/index.css'



function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
      breakpoint: 769,
      settings: { 
        dots: false,
        arrows: false,
      }
    },]
  };
  return (
    <div className='projects-container'>
      <Slider {...settings} className='slider'>
        {projectsData.map((project) => (
          <div>
            <div key={project.id} id={project.id} className='projects-card'>
              <img src={project.photo} className='projects-photo' />
            </div>
            <div className='project-card-footer'>
              <h4 className='project-title'>{project.name}</h4>
              <motion.a variants={buttonVariants} whileHover='hover' className='project-button' href={project.link}> Live</motion.a>
              <motion.a
              variants={ghlinkVariants}
              initial='initial'
              animate='animate'
              transition='transition'
              href={project.ghlink}
             ><BsGithub className='project-github-icon' /></motion.a>
            </div>

          </div>
        ))}

      </Slider>
    </div>
  );
}

export default Projects;
