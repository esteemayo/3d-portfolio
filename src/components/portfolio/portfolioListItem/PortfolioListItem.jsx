import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

import './PortfolioListItem.scss';

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      staggerChildren: 0.05,
    },
  },
};

const PortfolioListItem = ({ img, desc, link, title }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <div ref={ref} className='portfolio-list-item'>
      <motion.div
        variants={imgVariants}
        animate={isInView ? 'animate' : 'initial'}
        className='portfolio-list-item__image'
      >
        <img src={img} alt={title} />
      </motion.div>

      <motion.div
        variants={textVariants}
        animate={isInView ? 'animate' : 'initial'}
        className='portfolio-list-item__wrapper'
      >
        <motion.h1
          variants={textVariants}
          className='portfolio-list-item__wrapper--title'
        >
          {title}
        </motion.h1>
        <motion.p
          variants={textVariants}
          className='portfolio-list-item__wrapper--desc'
        >
          {desc}
        </motion.p>
        <motion.a
          variants={textVariants}
          href={link}
          className='portfolio-list-item__wrapper--link'
        >
          <button type='button'>View project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default PortfolioListItem;
