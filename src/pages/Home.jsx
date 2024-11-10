import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rat from '../assets/rat.png';
import ratCooking from '../assets/rat-cooking.jpg';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { FaGithub , FaInstagram , FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import circularicon from '../assets/intro-icon.svg'
import aboutIcon from '../assets/about-icon.svg'
import demesp from '../assets/demesp.png'
import ffcs from '../assets/ffcs.png'
import askpdf from '../assets/askpdf.png'
const Home = () => {
  const [expanded, setExpanded] = useState(0);

  // Data from the JSON object
  const data = {
    mainContent: {
      image: circularicon,
      photo: rat,
      catchphrase: "Need a website to really create that buzz?",
      description: "You're in the right place.",
      email: "achurox1121@gmail.com",
      socials: {
        linkedin: "https://www.linkedin.com/in/arvind-babu-538186260/",
        github: "https://github.com/coderman400",
        instagram: "https://www.instagram.com/arvindd.xd/",
      },
    },
    about: {
      image: aboutIcon,
      text: "I'm Arvind Babu. A 20 year old computer science student at VIT, working on all sorts of web dev technologies. Specialized in React.js and Tailwind and also made projects with Framer, Web3.js, Solidity, FastAPI, and much more. ",
    },
    projects: [
        
      {
        title: "DeMESP",
        image: demesp,
        link:'https://github.com/coderman400/de-mesp'
      },
      {
        title: "FFCS",
        image: ffcs,
        link:'https://github.com/coderman400/ffcs'
      },
      {
        title: "AskPDF",
        image: askpdf,
        link:'https://github.com/coderman400/askpdf'
      },
    ],
  };

  const toggleExpand = (index) => {
    if (expanded !== index) {
      setExpanded(index);
    }
  };

  return (
    <motion.div
      className="w-full h-full flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="grid grid-cols-3 md:grid-cols-3 gap-4 p-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Main Content Section */}
        <motion.div className="grid grid-cols-2 gap-4 col-span-2">
          <motion.div className="flex gap-4 col-span-2">
            <motion.div
              className="w-7/12 bg-dun rounded-lg text-6xl h-[28rem] p-8 flex flex-col justify-between font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={data.mainContent.image}
                className="h-28 w-28 self-end"
                initial={{ rotate: 0 }}
                animate={{ rotate: 560 }}
                transition={{
                  ease: 'circOut',
                  duration: 2.5,
                }}
              />
              <p>
                {data.mainContent.catchphrase}<br />
                <span className="text-4xl mt-2">{data.mainContent.description}</span>
              </p>
            </motion.div>
            <motion.div
              className="w-5/12 bg-jet rounded-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img src={data.mainContent.photo} alt="rat" className="w-full h-[28rem] object-cover" />
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-dun h-80 flex flex-col justify-between p-8 text-xl rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.img
              src={data.about.image}
              className="h-16 w-16 self-start"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <div>{data.about.text}</div>
          </motion.div>

          <motion.div
            onClick={() => (window.location.href = `mailto:${data.mainContent.email}`)}
            className="bg-jet text-anti-white h-80 rounded-lg flex flex-col justify-between p-8 text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover="hover"
          >
            <div className="text-2xl flex flex-row justify-between items-center cursor-pointer">
              <p>Have any questions?</p>
              <motion.div
                variants={{
                  hover: { x: [0, 8, -8, 0], y: [0, -8, 8, 0] },
                }}
                transition={{ duration: 1.3, repeat: Infinity, ease: 'circInOut' }}
              >
                <ArrowUpRightIcon className="h-8 w-8" />
              </motion.div>
            </div>
            <div>Contact me!</div>
          </motion.div>
        </motion.div>

        {/* Project Section */}
        <motion.div className="grid grid-cols-1 gap-4 col-span-1">
          <motion.div
            className="p-6 mb-4 bg-dun rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {data.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <div
                  className="text-3xl cursor-pointer mb-2 flex flex-row justify-between"
                  onClick={() => toggleExpand(index)}
                >
                  <p>{project.title}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <ArrowUpRightIcon className={`${expanded === index ? '' : 'hidden'}  hover:scale-110 transition duration-200 h-12 w-12`} />
                    </a>
                </div>
                <AnimatePresence>
                  {expanded === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <img src={project.image} alt={project.title} className="rounded-lg mt-2" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
          <motion.div
            className="bg-dun h-24 rounded-lg flex flex-row justify-evenly p-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href={data.mainContent.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:scale-110 transition duration-200 h-12 w-12" />
            </a>
            <a
              href={data.mainContent.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:scale-110 transition duration-200 h-12 w-12" />
            </a>
            <a
              href={data.mainContent.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:scale-110 transition duration-200 h-12 w-12" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
