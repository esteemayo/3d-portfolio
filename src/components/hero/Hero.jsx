import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import SpeechBubble from './speechBubble/SpeechBubble';
import { motion } from 'motion/react';

import Shape from './Shape';

import './Hero.scss';

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__section hero__left'>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='hero__left--title'
        >
          Hey There, <br />
          <span>I&apos;m Robert!</span>
        </motion.h1>

        <motion.div
          variants={awardVariants}
          initial='initial'
          animate='animate'
          className='hero__awards'
        >
          <motion.h2 variants={awardVariants} className='hero__awards--heading'>
            Top rated designers
          </motion.h2>

          <motion.p variants={awardVariants} className='hero__awards--desc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </motion.p>

          <motion.div variants={awardVariants} className='hero__awards--list'>
            <motion.img variants={awardVariants} src='/award1.png' alt='' />
            <motion.img variants={awardVariants} src='/award2.png' alt='' />
            <motion.img variants={awardVariants} src='/award3.png' alt='' />
          </motion.div>
        </motion.div>

        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          href='#services'
          className='hero__scroll'
        >
          <svg
            width='50px'
            height='50px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-hidden='true'
            focusable='false'
          >
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              d='M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z'
              stroke='white'
              strokeWidth='1'
            />
          </svg>
        </motion.a>
      </div>

      <div className='hero__section hero__right'>
        <motion.div
          variants={followVariants}
          initial='initial'
          animate='animate'
          className='hero__right--follow'
        >
          <motion.a variants={followVariants} href='/'>
            <img src='/instagram.png' alt='' />
          </motion.a>
          <motion.a variants={followVariants} href=''>
            <img src='/facebook.png' alt='' />
          </motion.a>
          <motion.a variants={followVariants} href=''>
            <img src='/youtube.png' alt='' />
          </motion.a>

          <motion.div
            variants={followVariants}
            className='hero__text-container'
          >
            <div className='hero__text-container--text'>Follow me</div>
          </motion.div>
        </motion.div>

        <SpeechBubble />

        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className='hero__right--certificate'
        >
          <img src='/certificate.png' alt='' />
          LMA CERTIFIED
          <br />
          PROFESSIONAL
          <br />
          DESIGNER
        </motion.div>

        <motion.a
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          href='/#contact'
          className='hero__contact-link'
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className='hero__contact-link--btn'
          >
            <svg
              viewBox='0 0 200 200'
              width='150'
              height='150'
              role='img'
              aria-hidden='true'
              focusable='false'
            >
              <circle cx='100' cy='100' r='90' fill='pink' />
              <path
                id='innerCirclePath'
                fill='none'
                d='M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
              />
              <text className='hero__circle-text'>
                <textPath href='#innerCirclePath'>Hire Now •</textPath>
              </text>
              <text className='hero__circle-text'>
                <textPath href='#innerCirclePath' startOffset='44%'>
                  Contact Me •
                </textPath>
              </text>
            </svg>

            <div className='hero__arrow'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='50'
                height='50'
                fill='none'
                stroke='black'
                strokeWidth='2'
                role='img'
                aria-hidden='true'
                focusable='false'
              >
                <line x1='6' y1='18' x2='18' y2='6' />
                <polyline points='9 6 18 6 18 15' />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>

      <div className='hero__bg'>
        <Canvas>
          <Suspense fallback='loading...'>
            <Shape />
          </Suspense>
        </Canvas>

        <div className='hero__bg--img'>
          <img src='/hero.png' alt='image' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
