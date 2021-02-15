import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { isBrowser, isMobile } from 'react-device-detect';
//Import components
import TechStack from './TechStack';
import Preview from './Preview';
//Import text context
import { Text } from '../../containers/Language';
import projectData from '../../data/projects.json';

type Props = {
  details: {
    title: string;
    summary?: string;
    firstLink: string;
    secondLink: string;
    techStack: {
      markupAndComponents: string[];
      styling: string[];
      utils: string[];
    };
    previewUrl: {
      mobile: string;
      desktop: string;
    };
  };
  i: number;
  handleClick: (url?: string) => void;
};

const Project = (props: Props) => {
  const {
    title,
    summary,
    firstLink,
    secondLink,
    techStack,
    previewUrl,
  } = props.details;

  const { handleClick, i } = props;

  //Setup for scroll animation
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 0.47, 0.57], [0, -50, -90]);
  const yDesktop = useTransform(
    scrollYProgress,
    [0, 0.47, 0.62, 0.85, 1],
    [0, -130, -175, -280, -330]
  );

  return (
    <motion.div
      style={isBrowser ? { y: yDesktop } : { y }}
      className={
        //Removes margin bottom on last rendered project
        i === projectData.length - 1
          ? 'flex flex-col mt-12 duration-700 md:flex-col md:m-0 lg:mt-16 lg:w-7/12 lg:m-auto lg:flex-row'
          : 'flex flex-col my-12 duration-700 md:flex-col md:m-0 lg:mt-16 lg:w-7/12 lg:m-auto lg:flex-row lg:mb-32 '
      }
    >
      <div
        className={`flex flex-col mb-4 md:w-3/5 md:m-auto md:mt-20 lg:w-10/12 lg:flex-shrink-0 lg:mt-0 lg:mr-12 lg:mb-0`}
      >
        {isMobile && <h4 className={'text-gray-50 font-medium'}>{title}</h4>}

        <button
          aria-label="Visit project's website"
          className="mb-2 md:my-2"
          onClick={() => handleClick(secondLink)}
        >
          <Preview previewUrl={previewUrl} />
        </button>

        <div
          className={
            'flex justify-center w-full max-w-sm self-center lg:max-w-none'
          }
        >
          <a
            aria-label="Visit repository on GitHub"
            href={firstLink}
            target="_blank"
            rel="noreferrer"
            className={
              'w-auto flex-grow h-8 bg-white mx-2 max flex flex-col justify-center items-center lg:w-24 lg:h-8 lg:flex-grow-0'
            }
          >
            <Text section="projectsSection" tid="btn1" />
          </a>
          <a
            aria-label="Visit project's website"
            href={secondLink}
            target="_blank"
            rel="noreferrer"
            className={
              'w-auto flex-grow h-8 bg-white mx-2 max flex flex-col justify-center items-center lg:w-24 lg:h-8 lg:flex-grow-0 '
            }
          >
            <Text section="projectsSection" tid="btn2" />
          </a>
        </div>
        <div
          className={`relative self-center w-48 h-2 mt-2 bg-white lg:ml-2 lg:w-40`}
        />
      </div>
      <div className="flex flex-col items-start flex-shrink-0 md:w-4/6 md:m-auto md:mt-8 lg:mt-0 lg:w-7/12">
        {!isMobile && (
          <h4
            className={
              'text-gray-50 mb-3 font-medium lg:self-start lg:mt-3 lg:mb-0'
            }
          >
            {title}
          </h4>
        )}
        <p className={'text-gray-50 text-lg font-light'}>{summary}</p>

        <TechStack content={techStack} />
      </div>
    </motion.div>
  );
};

export default Project;
