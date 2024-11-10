import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rat from '../assets/rat.png';
import ratCooking from '../assets/rat-cooking.jpg';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { FaGithub , FaInstagram , FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
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
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 p-4 w-11/12">
        <div className="grid grid-cols-2 gap-4 col-span-2">
          <div className="flex gap-4 col-span-2">
            <div className="w-7/12 bg-red-300 rounded-lg text-6xl h-96 p-8 flex flex-col justify-end">
              Let’s create dance floor magic for your special day
            </div>
            <div className="w-5/12 h-96 bg-blue-300 rounded-lg overflow-hidden">
              <img src={rat} alt="rat" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="bg-yellow-300 h-80 flex flex-col justify-between p-8 text-xl rounded-lg"><div>OOOO</div><div>DJ Lisa is a passionate wedding DJ, acclaimed for blending diverse musical genres with expert crowd-reading skills. Based in Florida, she crafts personalized soundtracks that turn every wedding into an unforgettable celebration.</div></div>
          <div className="bg-pink-300 h-80 rounded-lg flex flex-col justify-between p-8 text-5xl"><div className='text-2xl flex flex-row justify-between'><p>Have any questions?</p><ArrowUpRightIcon className='h-8 w-8' /></div><div>Contact me!</div></div>
        </div>

        <div className="grid grid-cols-1 gap-4 col-span-1">
          <div className="p-6 mb-4 bg-green-300 rounded-lg">
            {projects.map((title, index) => (
              <div key={index} className="mb-4">
                <h3
                  className="text-3xl cursor-pointer mb-2"
                  onClick={() => toggleExpand(index)}
                >
                  {title}
                </h3>
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
          <div className="bg-gray-300 h-24 rounded-lg flex flex-row justify-evenly p-8 items-center"><FaTwitter className='h-16 w-16' /> <FaGithub className='h-16 w-16' /> <FaInstagram className='h-16 w-16' /></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
