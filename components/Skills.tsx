import { Skill as skillType } from '@/sanity/typing';
import { motion } from 'framer-motion';
import React from 'react';
import Skill from './Skill';

type Props = {
  skills: skillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      // initial={{
      //   opacity: 0,
      // }}
      transition={{
        duration: 4,
      }}
      whileInView={{
        opacity: [0, 1],
      }}
      viewport={{ once: true }}
      className="min-h-screen relative flex flex-col justify-center items-center text-center max-w-[1500px] "
    >
      <h3 className="absolute top-[4rem] tracking-[17px] pl-[17px] uppercase text-gray-600 text-xl">
        Skills
      </h3>
      <h3 className="absolute top-[7rem] tracking-[10px] pl-[10px] uppercase text-gray-400 text-sm">
        Hover for proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5 md:gap-8 mt-10">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
