import PortfolioListItem from './portfolioListItem/PortfolioListItem';
import { portfolios } from '..';

import './Portfolio.scss';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='portfolio__list'>
        <div className='portfolio__list--empty' />

        {portfolios.map((portfolio) => {
          return <PortfolioListItem key={portfolio.id} {...portfolio} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
