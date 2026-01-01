import { useRef } from 'react';
import { motion, useScroll } from 'motion/react';

import PortfolioListItem from './portfolioListItem/PortfolioListItem';
import { portfolios } from '..';

import './Portfolio.scss';

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <div className='portfolio'>
      <motion.div className='portfolio__list'>
        <div className='portfolio__list--empty' />

        {portfolios.map((portfolio) => {
          return <PortfolioListItem key={portfolio.id} {...portfolio} />;
        })}
      </motion.div>

      <section />
      <section />
      <section />
      <section />
    </div>
  );
};

export default Portfolio;
