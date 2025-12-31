import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

import ConsoleModelContainer from './console/ConsoleModelContainer';
import Counter from './counter/Counter';
import ComputerModelContainer from './computer/ComputerModelContainer';
import MugModelContainer from './mug/MugModelContainer';

import { services } from './../index';

import './Services.scss';

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-200px' });

  const [currentServiceId, setCurrentServiceId] = useState(1);

  return (
    <div ref={ref} className='services'>
      <div className='services__section left'>
        <motion.h1
          variants={textVariants}
          animate={isInView ? 'animate' : 'initial'}
          className='services__title'
        >
          How do I help?
        </motion.h1>

        <motion.div
          variants={listVariants}
          animate={isInView ? 'animate' : 'initial'}
          className='services__list'
        >
          {services.map((service) => {
            const { id, img, title, counter } = service;
            return (
              <motion.div
                variants={listVariants}
                key={id}
                onClick={() => setCurrentServiceId(id)}
                className='services__list--item'
              >
                <div className='services__list--icon'>
                  <img src={img} alt={title} />
                </div>

                <div className='services__list--info'>
                  <h2>{title}</h2>
                  <h3>{counter}</h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className='services__counter-list'>
          <Counter from={0} to={100} text='Projects completed' />
          <Counter from={0} to={72} text='Happy clients' />
        </div>
      </div>

      <div className='services__section right'>
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <MugModelContainer />
        ) : (
          <ConsoleModelContainer />
        )}
      </div>
    </div>
  );
};

export default Services;
