import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const BgCircle = (props: Props) => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      animate={{
        scale: [0, 3, 1],
        opacity: [0, 1, 0.3],
        // borderRadius: ['20%', '20%', '50%', '80%', '30%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center h-6 w-6 top-[7.25rem] "
    >
      <div className="absolute border border-gray opacity-20 rounded-full h-[100px] w-[100px] " />
      <div className="absolute border border-gray opacity-20 rounded-full h-[200px] w-[200px] " />
      <div className="absolute border border-gray opacity-20 rounded-full h-[300px] w-[300px] " />
      <div className="absolute border border-[#A8ACA7] rounded-full h-[400px] w-[400px] animate-pulse  " />
      <div className="absolute border border-gray opacity-20 rounded-full h-[700px] w-[700px] " />
    </motion.div>
  );
};

export default BgCircle;
