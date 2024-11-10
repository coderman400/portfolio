import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rat from '../assets/rat.png';
import ratCooking from '../assets/rat-cooking.jpg';

const Home = () => {
  const [expanded, setExpanded] = useState(0);
  const projects = ['Cooking', 'Cooking again', 'Cooking']
  const toggleExpand = (index) => {
    if(expanded!==index){
        setExpanded(index);
    }
  };
  return (
    <div className="w-full h-full flex justify-center">
      <div className="grid grid-cols-2  md:grid-cols-2 gap-4 p-4 w-11/12">

        <div className="grid grid-cols-2 gap-4 col-span-1">
          <div className=" bg-red-300 rounded-lg text-6xl h-96 p-8 flex flex-col justify-end">
            Let’s create dance floor magic for your special day
          </div>
          <div className="h-96 bg-blue-300 rounded-lg">
            <img src={rat} alt="rat" />
          </div>
          <div className=" bg-yellow-300 h-80 rounded-lg">Box 4</div>
          <div className=" bg-pink-300 h-80 rounded-lg">Box 5</div>
        </div>

        <div className="grid grid-cols-1 gap-4 col-span-1 ">
            <div className=" p-6 mb-4 bg-green-300 rounded-lg">
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
                        ease: [0.4, 0, 0.2, 1] // Custom easing for smoothness
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
            <div className=" bg-gray-300 h-24 rounded-lg">Box 6</div>
        </div>

      </div>
    </div>
  );
};

export default Home;
