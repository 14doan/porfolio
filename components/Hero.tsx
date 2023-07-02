import { urlFor } from '@/sanity';
import { Info } from '@/sanity/typing';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BgCircle from './BgCircle';

type Props = {
  info: Info;
};

const Hero = ({ info }: Props) => {
  const [text, count] = useTypewriter({
    words: info.typewriter,
    loop: true,
    delaySpeed: 1000,
  });
  // console.log('getting Hero:', urlFor(info?.heroImage).url());
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <h3 className=" z-21 text-xl text-center uppercase text-gray-600 tracking-[17px] pl-[17px] ">
        {info?.role}
      </h3>

      <BgCircle />
      <Image
        className="rounded-full object-cover h-[13rem] w-[13rem]"
        src={urlFor(info?.heroImage).url()}
        alt="profile pic"
        width="150"
        height="150"
      />
      <div className="flex flex-col w-screen justify-center items-center  text-center overflow-hidden z-20">
        <h1 className="py-10 text-xl sm:text-3xl  lg:text-4xl  font-semibold">
          <span>{text}</span>
          <Cursor cursorColor="blue" />
        </h1>
        <div>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
