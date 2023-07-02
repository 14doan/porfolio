import { Social } from '@/sanity/typing';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 p-5 flex justify-between mx-auto max-w-6xl z-20">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.7 }}
        className="flex flex-row items-center"
      >
        {socials.map((s) => (
          <SocialIcon
            key={s._id}
            url={s.url}
            fgColor="black"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.7 }}
        className="flex flex-row items-center cursor-pointer "
      >
        <SocialIcon
          network="email"
          fgColor="black"
          bgColor="transparent"
          url="#contact"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-600">
            {' '}
            Contact me{' '}
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
