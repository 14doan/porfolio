import { urlFor } from '@/sanity';
import { Info } from '@/sanity/typing';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Props = {
  info: Info;
};

const About = ({ info }: Props) => {
  // console.log('getting', info.aboutImage);
  return (
    <div className="relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-6xl px-11 justify-center mx-auto items-center">
      <h3 className="absolute top-[4rem] tracking-[17px] pl-[17px] uppercase text-gray-600 text-xl">
        About
      </h3>

      <motion.div
        className="h-[15rem]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.4,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
      >
        <Image
          className="-mb-20 flex-shrink-0 w-52 h-52 rounded-full object-cover 
        md:mb-0 md:rounded-lg md:w-96 md:h-96 md:-mt-10"
          src={urlFor(info?.aboutImage).url()}
          alt="picture as a kid"
          width="250"
          height="250"
        />
      </motion.div>

      <div className="space-y-5 md:px-10 max-w-[400px]">
        <h4 className="text-2xl font-semibold"> Why I&apos;m doing this...</h4>
        <p className="text-md">{info?.aboutBody} </p>
      </div>
    </div>
  );
};

export default About;
