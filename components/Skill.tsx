import { urlFor } from '@/sanity';
import { Skill } from '@/sanity/typing';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="relative flex group cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className=" flex items-center justify-center border rounded-full border-gray-400 h-[3rem] w-[3rem] lg:w-[4rem] lg:h-[4rem] filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          className="object-contain h-[2rem] w-[2rem] lg:w-[2.5rem] lg:h-[2.5rem] "
          src={urlFor(skill?.skillImage).url()}
          // src="/youngd.jpg"
          alt="react icon"
          width="150"
          height="150"
        ></Image>
      </motion.div>
      <div className="absolute rounded-full z-0 h-[3rem] w-[3rem] lg:w-[4rem] lg:h-[4rem]  opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white ">
        <div className="h-full flex justify-center items-center">
          <p className="text-xl font-bold text-black">{skill?.progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
