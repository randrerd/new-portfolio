import React from 'react';
import { motion } from 'framer-motion';

import projectData from '../data/projects.json';
import ProjectsSecionSubheading from './ProjectsSectionSubheading';
import Project from './Project';
import useScroll from './useScroll';

import { Text } from '../containers/Language';

//Import animations
import { containerVariants } from '../animation';

export default function ProjectsSection(props) {
  const projectsContent = Text({ section: 'projectsSection' });
  const [element, controls] = useScroll();

  const textContent = projectsContent.projects;

  const projects = projectData.map((project, i) => {
    //Adds text content to projects data
    project.summary = textContent[i].summary;
    project.title = textContent[i].name;
    return project;
  });

  return (
    <motion.section
      initial="hidden"
      animate={controls}
      ref={element}
      variants={containerVariants}
      className={`bg-black px-8 py-4 pb-24 mt-7 flex flex-col lg:px-48 lg:pt-16 lg:pb-0`}
    >
      <ProjectsSecionSubheading />
      {projects.map((project, key) => {
        return (
          <Project
            details={project}
            i={key}
            key={key}
            handleClick={props.handleClick}
          />
        );
      })}
    </motion.section>
  );
}
