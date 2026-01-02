import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

import PortfolioListItem from './portfolioListItem/PortfolioListItem';
import { portfolios } from '..';

import './Portfolio.scss';

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const [containerDistance, setContainerDistance] = useState(0);

  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * portfolios.length]
  );

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener('resize', calculateDistance);
    return () => window.removeEventListener('resize', calculateDistance);
  }, []);

  return (
    <div ref={ref} className='portfolio'>
      <motion.div className='portfolio__list' style={{ x: xTransform }}>
        <div
          className='portfolio__list--empty'
          style={{
            width: window.innerWidth - containerDistance,
            // background: 'pink',
          }}
        />

        {portfolios.map((portfolio) => {
          return <PortfolioListItem key={portfolio.id} {...portfolio} />;
        })}
      </motion.div>

      <section />
      <section />
      <section />
      <section />
      <section />

      <div className='portfolio__progress'>
        <svg width='100%' height='100%' viewBox='0 0 160 160'>
          <circle
            cx='80'
            cy='80'
            r='70'
            fill='none'
            stroke='#ddd'
            strokeWidth={20}
          />
          <motion.circle
            cx='80'
            cy='80'
            r='70'
            fill='none'
            stroke='#dd4c62'
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform='rotate(-90 80 80)'
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
