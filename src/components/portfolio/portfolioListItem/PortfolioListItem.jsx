import './PortfolioListItem.scss';

const PortfolioListItem = ({ img, desc, link, title }) => {
  return (
    <div className='portfolio-list-item'>
      <div className='portfolio-list-item__image'>
        <img src={img} alt={title} />
      </div>

      <div className='portfolio-list-item__wrapper'>
        <h1 className='portfolio-list-item__wrapper--title'>{title}</h1>
        <p className='portfolio-list-item__wrapper--desc'>{desc}</p>
        <a href={link} className='portfolio-list-item__wrapper--link'>
          <button type='button'>View project</button>
        </a>
      </div>
    </div>
  );
};

export default PortfolioListItem;
