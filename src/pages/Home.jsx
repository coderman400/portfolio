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
    <div className="w-full h-full flex justify-center">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 p-4">
        <div className="grid grid-cols-2 gap-4 col-span-2">
          <div className="flex gap-4 col-span-2">
            <div className="w-7/12 bg-dun rounded-lg text-6xl h-[28rem] p-8 flex flex-col justify-between font-serif">
            <img src={circularicon} className='h-28 w-28 self-end'></img>
            <p>
              Need a website to really <i>create that buzz?</i> <span className='text-4xl mt-2'>You're in the right place.</span>
            </p>
            </div>
            <div className="w-5/12 h-[28rem] bg-jet rounded-lg overflow-hidden">
              <img src={rat} alt="rat" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="bg-dun h-80 flex flex-col justify-between p-8 text-xl rounded-lg">
          <img src={aboutIcon} className='h-16 w-16 self-start'></img>
            <div>DJ Lisa is a passionate wedding DJ, acclaimed for blending diverse musical genres with expert crowd-reading skills. Based in Florida, she crafts personalized soundtracks that turn every wedding into an unforgettable celebration.</div></div>
          <div className="bg-jet text-anti-white h-80 rounded-lg flex flex-col justify-between p-8 text-5xl"><div className='text-2xl flex flex-row justify-between'><p>Have any questions?</p><ArrowUpRightIcon className='h-8 w-8' /></div><div>Contact me!</div></div>
        </div>

        <div className="grid grid-cols-1 gap-4 col-span-1">
          <div className="p-6 mb-4 bg-dun rounded-lg">
            {projects.map((title, index) => (
              <div key={index} className="mb-4">
                <div
                  className="text-3xl cursor-pointer mb-2 flex flex-row justify-between"
                  onClick={() => toggleExpand(index)}
                >
                  <p>{title}</p>
                  <ArrowUpRightIcon className={`${expanded==index? '':'hidden'} h-8 w-8`}/>
                </div>
                <AnimatePresence>
                  {expanded === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1], // Custom easing for smoothness
                      }}
                      className="overflow-hidden"
                    >
                      <img src={ratCooking} alt={title} className="rounded-lg mt-2" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="bg-dun h-24 rounded-lg flex flex-row justify-evenly p-8 items-center"><FaTwitter  className='h-12 w-12' /> <FaGithub  className='h-12 w-12' /> <FaInstagram className='h-12 w-12' /></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
