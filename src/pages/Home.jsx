import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rat from '../assets/rat.png';
import ratCooking from '../assets/rat-cooking.jpg';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { FaGithub , FaInstagram , FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import circularicon from '../assets/intro-icon.svg'
import aboutIcon from '../assets/about-icon.svg'

const Home = () => {
  const [expanded, setExpanded] = useState(0);
  const projects = ['Cooking', 'Cooking again', 'Cooking'];
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
            src={circularicon}
            alt="rotating icon"
            className="h-28 w-28 self-end"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 360,
            }}
          />
          <p>
            Need a website to really create that <i>buzz?</i><br></br>
            <span className="text-4xl mt-2">You're in the right place.</span>
          </p>
        </motion.div>
        <motion.div
          className="w-5/12 bg-jet rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={rat} alt="rat" className="w-full h-[28rem] object-cover" />
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-dun h-80 flex flex-col justify-between p-8 text-xl rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.img
          src={aboutIcon}
          className="h-16 w-16 self-start"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <div>
          DJ Lisa is a passionate wedding DJ, acclaimed for blending diverse
          musical genres with expert crowd-reading skills. Based in Florida, she
          crafts personalized soundtracks that turn every wedding into an
          unforgettable celebration.
        </div>
      </motion.div>

      <motion.div
        onClick={() => (window.location.href = 'mailto:achurox1121@gmail.com')}
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
        {projects.map((title, index) => (
          <div key={index} className="mb-4">
            <div
              className="text-3xl cursor-pointer mb-2 flex flex-row justify-between"
              onClick={() => toggleExpand(index)}
            >
              <p>{title}</p>
              <ArrowUpRightIcon
                className={`${expanded === index ? '' : 'hidden'} h-8 w-8 hover:scale-110 transition duration-200`}
              />
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
                  <img src={ratCooking} alt={title} className="rounded-lg mt-2" />
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
          href="https://www.linkedin.com/in/arvind-babu-538186260/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:scale-110 transition duration-200 h-12 w-12" />
        </a>
        <a
          href="https://github.com/coderman400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:scale-110 transition duration-200 h-12 w-12" />
        </a>
        <a
          href="https://www.instagram.com/arvindd.xd/"
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
